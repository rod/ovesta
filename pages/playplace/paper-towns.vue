<template>
  <div class="page-wrapper">
    <header>
      <h1>Paper Towns</h1>
      <p>
        <iframe src="https://ghbtns.com/github-btn.html?user=rod&type=follow" frameborder="0" scrolling="0" width="95px" height="20px"></iframe>
        <a href="https://twitter.com/rrrrrrod" class="twitter-follow-button" data-show-count="false">Follow @rrrrrrod</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
      </p>
    </header>

    <main>
      <textarea v-model="message" @keydown="margofy(message)"></textarea>
    </main>

    <footer>
      <small>Made with &hearts; by <a href="http://rod.sh">Rod</a></small>
    </footer>
  </div>
</template>

<script>
export default {
  layout: 'blank',

  data() {
    return {
      message: '...beCaUSE tHe rUles of CaPItALIzAtion aRE uNfair To ThE leTterS in thE middle :)'
    }
  },

  head() {
    return {
      title: 'pAper tOwnS',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans|Shadows+Into+Light&display=swap' },
      ]
    }
  },

  methods: {
    pickCase: () => {
      const num = Math.floor(Math.random()*100);

      if (num >= 60) {
        return 'up';
      } else {
        return 'lo';
      }
    },

    margofy: function (message) {
      let last = message.charAt(message.length - 1);

      if (this.pickCase() === 'up') {
        let ul = last.toUpperCase();
        this.message = message.substr(0, message.length-1) + ul
      } else {
        let ll = last.toLowerCase();
        this.message = message.substr(0, message.length-1) + ll
      }
    },
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.page-wrapper {
  background: #fafafa;
  font-family: 'open sans', Helvetica, Arial, sans-serif;
  color: #333;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

header,
footer {
  padding: 1em;
}

h1 {
  margin: 0;
  font-weight: normal;
}

textarea {
  border: 0;
  font-family: 'Shadows Into Light', cursive;
  font-size: 1.5em;
  padding: 1em 10%;
  height: 100vh;
  width: 100%;
  resize: vertical;
  display: block;

  &:focus {
    outline: none;
  };
}
</style>
