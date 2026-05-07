'use strict';
const fs = require('fs');
const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');
const platform = process.platform;
const arch = process.arch;

if (platform === 'darwin') {
	fs.copyFileSync(path.join(__dirname, '../vendor/macos/gifsicle'), path.join(__dirname, '../vendor/gifsicle'));
} else if (platform === 'win32') {
	fs.copyFileSync(path.join(__dirname, `../vendor/${platform}/${arch}/gifsicle.exe`), path.join(__dirname, '../vendor/gifsicle.exe'));
} else {
	fs.copyFileSync(path.join(__dirname, `../vendor/${platform}/${arch}/gifsicle`), path.join(__dirname, '../vendor/gifsicle'));
}

module.exports = new BinWrapper()
	.use(process.platform === 'win32' ? 'gifsicle.exe' : 'gifsicle')
	.dest(path.join(__dirname, '../vendor'));
