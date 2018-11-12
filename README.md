# 🔥 set-me-on-fire

A script to add "Set Me On Fire" to the Windows context menu as an alias to a promptless Shift + Delete. If you've ever been really pissed off at a file, you can now kill it with fire.

## What is this?

This program is completely stupid and a total meme. You probably don't care about this and won't find it at all useful.

## No, seriously, what is this?

In all seriousness, the idea for this project came out of a video made by YouTuber [TheRussianBadger](https://youtube.com/user/TheRussianBadger) which had a screenshot of the Windows Explorer context menu with the option "Set Me On Fire" in it. I tried finding a program that actually added that to Windows, but couldn't find one, and thus decided to incarnate the meme.

## Installation

### [Download here](https://github.com/linuswillner/set-me-on-fire/releases/latest)

Unzip the archive into any location you want (No installation necessary) and run either the x64 or x86 version dependent on whether your operating system is 64- or 32-bit. Works on Windows Vista and up.

**Important:** Do not delete, alter or move the `vbs` directory. It is required for the program to work its magic in this portable manner.

**Note:** If even after running the executable and injecting the entries you're still not seeing the menu item, open a command prompt and run the executables from there to get the console output. If you encounter errors, feel free to file an [issue](https://github.com/linuswillner/set-me-on-fire/issues).

## Tech mumbo jumbo

This is a simple JavaScript application compiled into an executable that adds a "Set Me On Fire" option to the Windows Explorer context menu. The program injects an entry into the registry for the Explorer context menu that, when used on a file or folder, deletes the file without confirmation.

The context menu item is added for the current user only and thus no process privilege elevation is necessary. The program itself is a rather simple CLI interface. You simply press some buttons and away you go.

## License

MIT © Linus Willner 2018. See [LICENSE](LICENSE).
