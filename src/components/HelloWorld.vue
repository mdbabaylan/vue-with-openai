<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <!-- Existing AppBar content -->

      <!-- Add a button to open the chatbox -->
      <v-btn @click="chatboxOpen = !chatboxOpen">
        <v-icon>mdi-chat</v-icon>
      </v-btn>
    </v-app-bar>


    <v-card-text>
      <v-list two-line>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, index) in chatMessages" :key="index">
            <v-list-item-content>
              <v-list-item-title>{{ item.user }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.message }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-textarea auto-grow label="Message" rows="2" v-model="message"></v-textarea>
      <v-btn color="primary" text @click="sendMessage">Send</v-btn>
    </v-card-text>

    <v-main>

    </v-main>
  </v-app>
</template>

<script>
import openai from '../openai';
export default {
  name: 'HelloWorld',

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
    chatboxOpen: false,
    message: '',
    chatMessages: []
  }),
  methods: {
    async sendMessage() {
      this.chatMessages.push({ user: 'You', message: this.message });

      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "MIC TEST!" }],
        model: "gpt-3.5-turbo",
      });

      const response = completion.choices[0].message.content;
      this.chatMessages.push({ user: 'GPT', message: response });

      this.message = '';
    }
  }
}
</script>
