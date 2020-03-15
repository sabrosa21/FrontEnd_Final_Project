<ul class="menu">
      <li>
        <g-link class="nav__link" to="/">Home</g-link>
      </li>
      <li>
        <g-link class="nav__link" to="/about/">About</g-link>
      </li>
      <li>
        <g-link class="nav__link" to="/portfolio/">Portfolio</g-link>
      </li>
      <li>
        <g-link class="nav__link" to="/contact/">Contact</g-link>
      </li>
      <li class="toggle">
        <menuIcon />
      </li>
    </ul>


$tabletPort: 600px;
.burger {
  position: fixed;
  top: 0;
  right: 0;
  width: 35px;
  height: 35px;
  margin: 5px 5px 0 0;

  @mixin anim($p, $time: 0.25s, $type: linear) {
    transition: $p $time $type;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 16px;
    @include anim(padding);

    @media (min-width: $tabletPort) {
      flex-direction: row;
    }
  }

  li {
    padding: 16px 0;
    text-transform: capitalize;
    @include anim(padding);

    &:not(.toggle) {
      display: none;
    }

    &.toggle {
      border: 0;
      display: flex;
      justify-content: flex-end;
    }

    @media (min-width: $tabletPort) {
      padding: 0 16px;
      @include anim(padding);
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.25);
      @include anim(background-color);
      //cursor: pointer;
      g-link {
        color: green;
        @include anim(color);
        display: block;
      }
    }
  }

  li + li {
    border-top: 1px solid #ccc;

    @media (min-width: $tabletPort) {
      border-left: 1px solid #ccc;
      border-top: 0;
      margin-top: 0;
    }
  }

  &.small {
    background-color: #000;
    @include anim(background-color);

    g-link {
      color: white;
    }

    ul {
      @media (min-width: $tabletPort) {
        padding: 8px 16px;
        @include anim(padding);
      }
    }

    li {
      padding: 8px 0;
      @include anim(padding);

      @media (min-width: $tabletPort) {
        padding: 0 16px;
        @include anim(padding);
      }
    }
  }

  .toggle {
    .burger {
      &:hover {
        cursor: pointer;
      }
      .top {
        //@include anim(transform .1s);
        transition: transform 0.3s ease-in-out;
      }
      .bottom {
        //@include anim(transform .1s);
        transition: transform 0.3s ease-in-out;
      }
      .middle {
        transform: scale(1);
        transform-origin: center;
        transition: transform 0.25s ease-in-out;
        //@include anim(transform .3s ease-in-out);
      }
    }
  }

  .menu {
    &.active {
      li {
        display: flex;
      }
      .toggle {
        order: -1;
      }
      .top {
        transform: translateX(9px) translateY(-1px) rotate(45deg);
        /* @include anim(transform .1s); */
        transition: transform 0.3s ease-in-out;
      }
      .bottom {
        transform: translateX(-8px) translateY(9px) rotate(-45deg);
        //@include anim(transform .1s);
        transition: transform 0.3s ease-in-out;
      }
      .middle {
        /* opacity: 0;
        @include anim(opacity .05s); */
        transform: scale(0);
        transform-origin: center;
        transition: transform 0.25s ease-in-out;
      }
    }
  }
}