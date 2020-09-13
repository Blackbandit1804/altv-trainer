import * as NativeUI from "../include/NativeUI/NativeUi"

export default class Menu {
    static selectItem(item: NativeUI.UIMenuItem, badge: NativeUI.BadgeStyle) {
        item.Parent.MenuItems.forEach(item => this.deselectItem(item))
        item.Enabled = false
        item.RightBadge = badge
    }

    static deselectItem(item: NativeUI.UIMenuItem) {
        item.Enabled = true
        item.RightBadge = NativeUI.BadgeStyle.None
    }

    static lockMenuItem(menuItem: NativeUI.UIMenuItem) {
        menuItem.Enabled = false
    }

    static lockMenuItems(menu: NativeUI.Menu) {
        menu.MenuItems.forEach(item => this.lockMenuItem(item))
    }

    static unlockMenuItem(menuItem: NativeUI.UIMenuItem) {
        menuItem.Enabled = true
    }

    static unlockMenuItems(menu: NativeUI.Menu) {
        menu.MenuItems.forEach(item => this.unlockMenuItem(item))
    }

    static sortMenuItems(menu: NativeUI.Menu) {
        menu.MenuItems.sort((a, b) => a.Text.localeCompare(b.Text))
    }
}