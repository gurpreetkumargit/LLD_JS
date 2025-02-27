// Button Factory

// abstract class
class ButtonFactory {
  createButton(type) {}
}

// concrete class
class defaultButtonFactory extends ButtonFactory {
  createButton(type) {
    switch (type) {
      case "primary":
        return new PrimaryButton();
      case "secondary":
        return new SecondaryButton();

      default:
        break;
    }
  }
}

// abstract class

class Button {
  render() {}
}

// concrete class
class PrimaryButton extends Button {
  render() {
    const button = document.createElement("button");
    button.className = "button primary";
    button.textContent = "Button Primary";
    document.getElementById("buttons").appendChild(button);
  }
}

class SecondaryButton extends Button {
  render() {
    const button = document.createElement("button");
    button.className = "button secondary";
    button.textContent = "secondary Primary";
    document.getElementById("buttons").appendChild(button);
  }
}

const btn = new defaultButtonFactory();
const primaryBtn = btn.createButton('primary');

