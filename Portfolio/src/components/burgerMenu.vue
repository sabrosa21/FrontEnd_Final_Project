<template>
  <div class="burger">
    <input type="checkbox" />
    <div class="menu">
      <div class="hamburger"></div>
    </div>
    <ul class="nav">
      <li>
        <g-link class="nav_link" to="/">Home</g-link>
      </li>
      <li>
        <g-link class="nav_link" to="/about/">About</g-link>
      </li>
      <li>
        <g-link class="nav_link" to="/portfolio/">Portfolio</g-link>
      </li>
      <li>
        <g-link class="nav_link" to="/contact/">Contact</g-link>
      </li>
    </ul>
  </div>
</template>

<script>
import menuIcon from "~/assets/icons/menuIcon.svg";

export default {
  components: {
    menuIcon
  }
};
</script>

<style lang="scss">
.burger {
  .menu {
    position: absolute;
    right: -100px;
    top: -100px;
    z-index: 100;
    width: 200px;
    height: 200px;
    background: #1f2833;
    border-radius: 50% 50% 50% 50%;
    transition: 0.5s ease-in-out;
    box-shadow: 0 0 0 0 #66fcf1, 0 0 0 0 #66fcf1;
    cursor: pointer;
  }
  .hamburger {
    position: absolute;
    top: 135px;
    left: 50px;
    width: 30px;
    height: 2px;
    background: #66fcf1;
    display: block;
    transform-origin: center;
    transition: 0.5s ease-in-out;
    &:after,
    &:before {
      transition: 0.5s ease-in-out;
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background: #66fcf1;
    }
    &:before {
      top: -10px;
    }
    &:after {
      bottom: -10px;
    }
  }
  input {
    display: block;
    width: 100%;
  }
  input:checked + .menu {
    box-shadow: 0 0 0 100vw #1f2833, 0 0 0 100vh #1f2833;
    border-radius: 50%;
    .hamburger {
      transform: rotate(45deg);
      &:after {
        transform: rotate(90deg);
        bottom: 0;
      }
      &:before {
        transform: rotate(90deg);
        top: 0;
      }
    }
  }

  input:checked + .menu + .nav {
    display: inline-block;
  }

  .nav {
    z-index: 200;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    opacity: 0;
    animation: opacity 0.25s ease-in-out 0.2s forwards;
    transition: 0.2s 0s ease-in-out;
    li {
      list-style: none;
    }
  }

  @-webkit-keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .nav_link {
    padding: 5% 0;
    font-size: 3.5rem;
    text-align: center;
    text-decoration: none;
    display: block;
    color: #fff;
    letter-spacing: 2%;
  }
}
</style>