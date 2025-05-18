async function foo(t){
	const audioData = await Spicetify.getAudioData(t);
	return audioData;
}
Spicetify.Player.addEventListener("songchange", async () => {
	bahh();
});


async function bahh(){
	q = Spicetify.Queue.nextTracks;
	console.log(q[0].contextTrack.uri);
	for(i = 0 ; i < 10; i++){
		Turi = q[i].contextTrack.uri;
		console.log(Turi);
		const a = await foo(Turi);
		console.log(a.track.tempo);
		if(a.track.tempo > 100){
			await Spicetify.removeFromQueue([ { uri: Turi } ]);
			console.log("removed");
		}
	}
}
