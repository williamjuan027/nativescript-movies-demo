import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "app-furniture",
  templateUrl: "./furniture.component.html",
})
export class FurnitureComponent {
  tabs: {
    [key: string]: {
      tabImage: string;
    };
  } = {
    home: {
      tabImage: "~/assets/images/other-apps/furniture/house.png",
    },
    search: {
      tabImage: "~/assets/images/other-apps/furniture/search.png",
    },
    cart: {
      tabImage: "~/assets/images/other-apps/furniture/shopping-cart.png",
    },
    likes: {
      tabImage: "~/assets/images/other-apps/furniture/hearts.png",
    },
    notifications: {
      tabImage: "~/assets/images/other-apps/furniture/notification.png",
    },
  };

  tags: {
    tagName: string;
    selected: boolean;
  }[] = [
    {
      tagName: "Bedroom",
      selected: true,
    },
    {
      tagName: "Kitchen",
      selected: false,
    },
    {
      tagName: "Livingroom",
      selected: false,
    },
    {
      tagName: "Bathroom",
      selected: false,
    },
  ];

  trending: {
    name: string;
    description: string;
    price: string;
    image: string;
  }[] = [
    {
      name: "Klippan",
      description: "2-seat sofa, grey",
      price: "$359",
      image: "~/assets/images/other-apps/furniture/sofa-klippan.png",
    },
    {
      name: "Hemlingby",
      description: "2-seat sofa, bomstad black",
      price: "$659",
      image: "~/assets/images/other-apps/furniture/sofa-hemlingby.png",
    },
    {
      name: "Klippan 2.0",
      description: "2-seat sofa, grey",
      price: "$499",
      image: "~/assets/images/other-apps/furniture/sofa-klippan.png",
    },
  ];
}
