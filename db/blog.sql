/*
 Navicat MongoDB Data Transfer

 Source Server         : localhost_27017
 Source Server Type    : MongoDB
 Source Server Version : 50004
 Source Host           : localhost:27017
 Source Schema         : blog

 Target Server Type    : MongoDB
 Target Server Version : 50004
 File Encoding         : 65001

 Date: 15/12/2021 13:46:16
*/


// ----------------------------
// Collection structure for categories
// ----------------------------
db.getCollection("categories").drop();
db.createCollection("categories");

// ----------------------------
// Documents of categories
// ----------------------------
db.getCollection("categories").insert([ {
    _id: ObjectId("5ebd3af143bac116b0165758"),
    name: "Mongoose",
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("5ebd3afc43bac116b0165759"),
    name: "API",
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("5ebd547d2815292a645bcbcf"),
    name: "nodejs",
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("5ebd5ba64ec6dd2ac45494e5"),
    name: "MongoDB",
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("5ebd8abe9a41c332645b40c2"),
    name: "Python",
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("5ebd8ad39a41c332645b40c3"),
    name: "SQL",
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("5ecbbaced55dc71724005a65"),
    name: "JavaScript",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for contents
// ----------------------------
db.getCollection("contents").drop();
db.createCollection("contents");

// ----------------------------
// Documents of contents
// ----------------------------
db.getCollection("contents").insert([ {
    _id: ObjectId("5ebd8b209a41c332645b40c5"),
    addTime: ISODate("2021-12-14T18:14:40.695Z"),
    views: NumberInt("0"),
    description: "Foundation of database program development",
    content: "The infrastructure was developed by creating the database tables and the security deployment plan for your application.",
    category: ObjectId("5ebd5ba64ec6dd2ac45494e5"),
    title: "Foundation of database program development",
    user: ObjectId("5ebac6ab7f59af18be34ff95"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("5ebd8b369a41c332645b40c6"),
    addTime: ISODate("2021-12-14T18:14:40.695Z"),
    views: NumberInt("0"),
    description: "Nodejs Frontend",
    content: "",
    category: ObjectId("5ebd547d2815292a645bcbcf"),
    title: "Frontend",
    user: ObjectId("5ebac6ab7f59af18be34ff95"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("5ebe61c93457ef076ce0044a"),
    addTime: ISODate("2021-12-15T09:28:36.589Z"),
    views: NumberInt("0"),
    description: "dfblk",
    content: "llllvdsnklvkljkSGSD",
    category: ObjectId("5ebd8ad39a41c332645b40c3"),
    title: "java",
    user: ObjectId("5ebac6ab7f59af18be34ff95"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("5ebe61ed3457ef076ce0044b"),
    addTime: ISODate("2021-12-15T09:28:36.589Z"),
    views: NumberInt("0"),
    description: "test",
    content: "test",
    category: ObjectId("5ebd8abe9a41c332645b40c2"),
    title: "Python Course",
    user: ObjectId("5ebac6ab7f59af18be34ff95"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("5ebea03b94e95e3b90742078"),
    addTime: ISODate("2021-12-15T13:52:55.808Z"),
    views: NumberInt("0"),
    description: "Test",
    content: "test",
    category: ObjectId("5ebd5ba64ec6dd2ac45494e5"),
    title: "DATABASE",
    user: ObjectId("5ebac6ab7f59af18be34ff95"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("5ebedc4bb4c2f1435c853849"),
    addTime: ISODate("2021-12-15T18:11:48.439Z"),
    views: NumberInt("8"),
    description: "Backend",
    content: "Backend",
    category: ObjectId("5ebd3af143bac116b0165758"),
    title: "Backend",
    user: ObjectId("5ebac6ab7f59af18be34ff95"),
    __v: NumberInt("2")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("5ec220d254a2f147b8dd7199"),
    addTime: ISODate("2021-12-11T05:34:13.22Z"),
    views: NumberInt("0"),
    description: "Android Application Professional Development",
    content: "Backend development",
    category: ObjectId("5ebd547d2815292a645bcbcf"),
    title: "Android Application Professional Development",
    user: ObjectId("5ebac6ab7f59af18be34ff95"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("5ec221ef54a2f147b8dd719a"),
    addTime: ISODate("2021-12-13T05:34:13.22Z"),
    views: NumberInt("1"),
    description: "Backend development",
    content: "Backend development",
    category: ObjectId("5ebd3af143bac116b0165758"),
    title: "Backend development",
    user: ObjectId("5ebac6ab7f59af18be34ff95"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("5ec223932b47ce21e00f6088"),
    views: NumberInt("0"),
    description: "This article assumes you have Eclipse plug-in development experience and the basic knowledge on Eclipse EMF and BIRT projects. ",
    content: "This article assumes you have Eclipse plug-in development experience and the basic knowledge on Eclipse EMF and BIRT projects. ",
    category: ObjectId("5ebd547d2815292a645bcbcf"),
    title: "Basic understanding of project development",
    user: ObjectId("5ebac6ab7f59af18be34ff95"),
    addTime: ISODate("2021-12-11T05:56:35.892Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("5ec223b12b47ce21e00f6089"),
    views: NumberInt("0"),
    description: "Nodejs development",
    content: "\r\nNode.js creates the first application\r\nIntroduction to NPM\r\nNode.js REPL\r\nNode.js callback function\r\nNode.js event loop\r\nNode.js EventEmitter\r\nNode.js Buffer\r\nNode.js Stream\r\n\r\n",
    category: ObjectId("5ebd547d2815292a645bcbcf"),
    title: "3.Nodejs development Android Application Professional Development",
    user: ObjectId("5ebac6ab7f59af18be34ff95"),
    addTime: ISODate("2021-12-12T05:57:05.127Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("5ec223f12b47ce21e00f608a"),
    views: NumberInt("2"),
    description: "Modular Management",
    content: "4.2 the Node. Js routing\r\n4.3 NodeJS Module management\r\n4.4 Node.js Tool module\r\n4.5 Node.js Web module",
    category: ObjectId("5ebd547d2815292a645bcbcf"),
    title: "4.nodejs Module management",
    user: ObjectId("5ebac6ab7f59af18be34ff95"),
    addTime: ISODate("2021-12-14T05:58:09.142Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("5ec224332b47ce21e00f608b"),
    views: NumberInt("29"),
    description: "node+express+mongodb",
    content: "Use Express framework to develop personal blog system (MongoDB is recommended for the database)\r\n1 can register with the avatar (password encrypted storage), can log in\r\n2. User information needs to be recorded during login. After successful login, user information (user name and profile picture) will be displayed on the blog page.\r\n3 after logging in can publish a blog, can modify blog, can delete the blog, can reply to a blog\r\n4 Can display the number of blog views\r\nYou can only browse blogs without logging in",
    category: ObjectId("5ebd547d2815292a645bcbcf"),
    title: "Personal Blog development",
    user: ObjectId("5ebac6ab7f59af18be34ff95"),
    addTime: ISODate("2021-12-15T05:59:15.491Z"),
    __v: NumberInt("4")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("5ed7a26575bf083254e27486"),
    views: NumberInt("1"),
    description: "dskdnlk",
    content: "lkj;ldjs;l",
    category: ObjectId("5ebd3af143bac116b0165758"),
    title: "java backend",
    user: ObjectId("5ebac6ab7f59af18be34ff95"),
    addTime: ISODate("2021-12-03T13:15:17.73Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("5ef0ad917ac1ec203c6c2eab"),
    views: NumberInt("1"),
    description: "teat1",
    content: "test1",
    category: ObjectId("5ebd547d2815292a645bcbcf"),
    title: "test1",
    user: ObjectId("5ebac6ab7f59af18be34ff95"),
    addTime: ISODate("2021-12-12T13:09:37.892Z"),
    __v: NumberInt("2")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("601957f437fac134b8872a95"),
    views: NumberInt("1"),
    description: "adadf",
    content: "dasfasd",
    category: ObjectId("5ebd3af143bac116b0165758"),
    title: "1111",
    user: ObjectId("60194f4219230c385842df1c"),
    addTime: ISODate("2021-12-02T13:47:32.083Z"),
    __v: NumberInt("3"),
    comments: [ ],
    thumbs: NumberInt("1"),
    thumbsArr: [
        {
            _id: "5ebac6ab7f59af18be34ff95",
            username: "admin",
            img: "/img/image/Qins.jpg",
            isAdmin: true
        }
    ]
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("604785e9ad8f39417c87086a"),
    views: NumberInt("36"),
    description: "asfasfsa",
    content: "sfzvs",
    category: ObjectId("5ebd3af143bac116b0165758"),
    title: "1212",
    user: ObjectId("5ec22df448282a1c289921cb"),
    addTime: ISODate("2021-12-09T14:27:53.752Z"),
    __v: NumberInt("4"),
    thumbs: NumberInt("1"),
    thumbsArr: [
        {
            _id: "5ebac6ab7f59af18be34ff95",
            username: "admin",
            img: "/img/image/Qins.jpg",
            isAdmin: true
        }
    ]
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("60478602ad8f39417c87086b"),
    views: NumberInt("106"),
    description: "",
    content: "",
    category: ObjectId("5ebd3afc43bac116b0165759"),
    title: "What is API?",
    user: ObjectId("5ec22df448282a1c289921cb"),
    addTime: ISODate("2021-12-09T14:28:18.423Z"),
    __v: NumberInt("10"),
    thumbs: NumberInt("1"),
    thumbsArr: [
        {
            _id: "5ebac6ab7f59af18be34ff95",
            username: "admin",
            img: "/img/image/Qins.jpg",
            isAdmin: true
        }
    ],
    comments: [ ]
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("61ba31b125ee1a06f499d717"),
    views: NumberInt("6"),
    thumbs: NumberInt("0"),
    thumbsArr: [ ],
    comments: [
        {
            id: "b1082dd712234eddbbb8315084fda99e",
            username: "admin",
            postTime: ISODate("2021-12-15T18:20:12.498Z"),
            content: "It's really helpful.",
            replyArr: [ ]
        },
        {
            id: "27c2521ef2ba42cc8943cb1e1b48f6f1",
            username: "admin",
            postTime: ISODate("2021-12-15T18:46:31.21Z"),
            content: "The system can be completed on all information browsing, inquiries, add, delete, modify, and other functions.",
            replyArr: [ ]
        },
        {
            id: "defd8829f05e41c2ab5367ca6f49514b",
            username: "admin",
            postTime: ISODate("2021-12-15T18:46:53.317Z"),
            content: "1 can register with the avatar (password encrypted storage), can log in 2. User information needs to be recorded during login. After successful login, user information (user name and profile picture) will be displayed on the blog page. 3 After login can publish a blog, can modify blog, can delete the blog, can comment blog 4 Can display the number of blog views You can only browse blogs without logging in",
            replyArr: [ ]
        }
    ],
    description: "Develop personal blogging system using Express framework  ",
    content: "Technical stack: Node (Express framework for back-end)+ bootstrap framework to write front-end style, nod module Mongoose to operate mongodb database\r\n\r\n1 can register with the avatar (password encrypted storage), can log in\r\n\r\n2. User information needs to be recorded during login. After successful login, user information (user name and profile picture) will be displayed on the blog page.\r\n\r\n3 After login can publish a blog, can modify blog, can delete the blog, can comment blog\r\n\r\n4 Can display the number of blog views\r\n\r\nYou can only browse blogs without logging in\r\n",
    category: ObjectId("5ebd547d2815292a645bcbcf"),
    title: "Develop personal blogging system",
    user: ObjectId("5ebac6ab7f59af18be34ff95"),
    addTime: ISODate("2021-12-15T18:19:29.982Z"),
    __v: NumberInt("3")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("61ba387e25ee1a06f499d718"),
    views: NumberInt("0"),
    thumbs: NumberInt("0"),
    thumbsArr: [ ],
    comments: [ ],
    description: "1 can register with the avatar (password encrypted storage), can log in 2. User information needs to be recorded during login. After successful login, user information (user name and profile picture) will be displayed on the blog page. 3 After login can publish a blog, can modify blog, can delete the blog, can comment blog 4 Can display the number of blog views You can only browse blogs without logging in",
    content: "",
    category: ObjectId("5ebd547d2815292a645bcbcf"),
    title: "The system can be completed on all information browsing, inquiries, add, delete, modify, and other functions. Sorted by category and time.",
    user: ObjectId("5ebac6ab7f59af18be34ff95"),
    addTime: ISODate("2021-12-15T18:48:30.807Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("5ebac6ab7f59af18be34ff95"),
    username: "admin",
    password: "21232f297a57a5a743894a0e4a801fc3",
    isAdmin: true,
    img: "/img/image/Qins.jpg",
    __v: 0
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5ec22d9c48282a1c289921c8"),
    img: "/img/image/1.jpg",
    isAdmin: false,
    username: "root",
    password: "21232f297a57a5a743894a0e4a801fc3",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5ec22db348282a1c289921c9"),
    img: "/img/image/2.jpg",
    isAdmin: false,
    username: "lucy",
    password: "698d51a19d8a121ce581499d7b701668",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5ec22dd148282a1c289921ca"),
    img: "/img/image/3.jpg",
    isAdmin: false,
    username: "KIKI",
    password: "e10adc3949ba59abbe56e057f20f883e",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5ec22df448282a1c289921cb"),
    img: "/img/image/7.jpg",
    isAdmin: false,
    username: "czf",
    password: "00b7691d86d96aebd21dd9e138f90840",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5ec22e8248282a1c289921cc"),
    img: "/img/image/6.jpg",
    isAdmin: false,
    username: "1011",
    password: "e3ceb5881a0a1fdaad01296d7554868d",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("60194f4219230c385842df1c"),
    img: "/img/image/015.jpg",
    isAdmin: false,
    username: "1234",
    password: "e3ceb5881a0a1fdaad01296d7554868d",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6070d31c9102382f8ca97a3e"),
    img: "/img/image/15.jpg",
    isAdmin: false,
    username: "2222",
    password: "e3ceb5881a0a1fdaad01296d7554868d",
    __v: NumberInt("0")
} ]);
