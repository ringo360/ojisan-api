console.log('[Util] Called')

/**
 * ランダムな絵文字(顔文字)を選びます。
 * @returns ランダムな絵文字
 */
export async function emoji() {
	const list = [
		"😃♥ ",
		"😃☀ ",
		"😃",
		"😃✋",
		"❗",
		"😄",
		"😆",
		"😚",
		"😘",
		"😚",
		"💕",
		"💗",
		"😍",
		"😁",
		"😋",
		"😂",
		"😊",
		"🎵",
		"(^_^)",
		"(^o^)",
		"(^з<)",
		"（笑）",
	]
	const num = Math.floor(Math.random() * list.length)
	return list[num]
}

/**
 * 呼び方を選びます。
 * @returns 「ちゃん」とか「ﾁｬﾝ」とか
 */
export async function randomName() {
	const list = [
		"",
		"ちゃん",
		"チャン",
		"ﾁｬﾝ"
	]
	const num = Math.floor(Math.random() * list.length)
	return list[num]
}