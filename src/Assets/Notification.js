const notifications = [
    {
        id: 1,
        title: "Your order is placed",
        description: "waiting for shipping",
        avatar: "/static/icons/ic_notification_package.svg",
        type: "order_placed",
        createdAt:"07 Sep 2020",
        isUnRead: true,
    },
    {
        id: 2,
        title: "Your order is placed",
        description: "answered to your comment on the Minimal",
        avatar: "/static/icons/ic_notification_chat.svg",
        type: "friend_interactive",
        createdAt:"07 Sep 2020",
        isUnRead: true,
    },
    {
        id: 3,
        title: "You have new message",
        description: "5 unread messages",
        avatar: "/static/icons/ic_notification_chat.svg",
        type: "chat_message",
        createdAt:"07 Sep 2020",
        isUnRead: false,
    },
    {
        id: 4,
        title: "You have new mail",
        description: "sent from Guido Padberg",
        avatar: "/static/icons/ic_notification_mail.svg",
        type: "mail",
        createdAt:"07 Sep 2020",
        isUnRead: false,
    },
    {
        id: 5,
        title: "Delivery processing",
        description: "Your order is being shipped",
        avatar: "/static/icons/ic_notification_shipping.svg",
        type: "order_shipped",
        createdAt:"07 Sep 2020",
        isUnRead: false,
    },
];

export default notifications;