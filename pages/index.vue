<template>
  <main>
    <section>
      <h1>Hey! I'm Rod.</h1>
      <p>
        I’m working on a few updates to my site as you may be able to tell.
        Until I get things situated here, you can find me on
        <a
          href="https://twitter.com/rrrrrrod"
        >twitter</a> for fun, or
        <a href="https://www.linkedin.com/in/rodneydennis">linkedin</a> for
        serious.
      </p>
      <p>&mdash; ✌🏾</p>
    </section>
  </main>
</template>

<style>
@font-face {
  font-family: "Argent";
  font-weight: bold;
  src: url("~assets/fonts/ArgentCF-Bold.woff2") format("woff2"),
    url("~assets/fonts/ArgentCF-Bold.woff") format("woff");
}

@font-face {
  font-family: "Cartograph";
  src: url("~assets/fonts/CartographSansCF-Regular.woff2") format("woff2"),
    url("~assets/fonts/CartographSansCF-Regular.woff") format("woff");
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

main {
  overflow-x: hidden;
  display: flex;
  align-items: center;
  height: 100%;
}

section {
  padding: 1rem;
  max-width: 30rem;
}

h1 {
  font-family: "Argent", serif;
  font-size: 4rem;
  margin: 0;
  letter-spacing: -0.25rem;
  line-height: 1;
  margin-bottom: 1.5rem;
}

p {
  font-family: "Cartograph", sans-serif;
  font-size: 1.25rem;
  margin: 0;
  line-height: 1.5;
}

a {
  display: inline-block;
  color: #ff0059;
  text-decoration: none;
  position: relative;
  transition: all 0.5s ease;
}

a::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 100%;
  height: 0.125rem;
  width: 100%;
  background-color: hsl(339, 100%, 50%, 20%);
  transition: top 0.2s 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    height 0.1s cubic-bezier(0.4, 0, 0.2, 1);
}

a:hover::after {
  bottom: 0;
  top: 10%;
  height: 100%;
  transition: top 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    height 0.1s 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
