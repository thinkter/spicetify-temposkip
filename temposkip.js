async function foo(t){
	const audioData = await Spicetify.getAudioData(t);
	return audioData;
}
Spicetify.Player.addEventListener("songchange", async () => {
	const data = Spicetify.Player.data || Spicetify.Queue;
	const trackID = data.item.uri;
	const a = await foo(trackID);
	console.log(a.track.tempo);
	if (a.track.tempo > 100){
		Spicetify.Player.next();
	}
});


