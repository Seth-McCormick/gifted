import { GiftController } from "./Controllers/GiftController.js";


class App {

  giftController = new GiftController()
}

window["app"] = new App();
