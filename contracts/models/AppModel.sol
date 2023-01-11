// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0 <0.9.0;

enum AppType {
    Game,
    Social,
    Education,
    Pay, 
    Commerce,
    Entertainment,
    App
}

struct App {
    string key;
    string name;
    string appType;
    string webUrl;
    string iconUrl;
}
