var users = [];


var database = firebase.database().ref('users');
database.on('value', function(snapshot) {
    users = [];
	users1 = [];
    const friendsArr = [];
    snapshot.forEach(function(userSnapshot) {

        const first_name = userSnapshot.child('first_name').val();
        const last_name = userSnapshot.child('last_name').val();
        const score = userSnapshot.child('score').val();
        const id = userSnapshot.key;
        const country = userSnapshot.child('country').val();
        const city = userSnapshot.child('city').val();
        const selfie_preview = userSnapshot.child('selfie_preview').val();
        const friends = userSnapshot.child('friends').val();

        // console.log(selfie_preview);

        // for (const selfie in selfie_preview) {
        //console.log(selfie_preview[selfie]);
        const user = {id: id, first_name: first_name, last_name: last_name, city: city, score: score, selfie_preview: selfie_preview, friends: friends};

        users.push(user);

        /* users = users.filter(function(val){
            return val.city === 'Munich';
        });*/

        users.sort(function(a, b){
            return b.score - a.score;
        });

        //console.log(currentUser.friends.includes(user.id));

        if (currentUser.friends.includes(user.id) || user.id === currentUser.id){
            friendsArr.push(user);
        }

        $('#bestOf tr').not(':first').remove();
        var html = '<tr><td bgcolor="yellow">#' + (1) + '</td><td bgcolor="yellow">' + users[0].first_name + '  ' + users[0].last_name + '</td><td bgcolor="yellow">' + users[0].score + '</td></tr>';
        for(var i = 1; i < (users.length < 5 && users.length || 5); i++)
            html += '<tr><td>#' + (i + 1) + '</td><td>' + users[i].first_name + '  ' + users[i].last_name + '</td><td>' + users[i].score + '</td></tr>';
        $('#bestOf tr').first().after(html);

        $('#friendsTable tr').not(':first').remove();
        var html = '';
        for(var i = 0; i < (friendsArr.length < 5 && friendsArr.length || 5); i++)
            html += '<tr><td>#' + (i + 1) + '</td><td>' + friendsArr[i].first_name + '  ' + friendsArr[i].last_name + '</td><td>' +friendsArr[i].score + '</td></tr>';
        $('#friendsTable tr').first().after(html);

        if (user.id === currentUser.id) {
            //console.log(user.score);
        }
		for (const selfie in selfie_preview) {
                //console.log(selfie_preview[selfie]);
                const user1 = {
                    id: id,
                    first_name: first_name,
                    last_name: last_name,
                    city: city,
                    score: score,
                    selfie_preview: selfie_preview[selfie]
                };

                users1.push(user1);

                users1 = users1.filter(function (val) {
                    return val.city === 'Munich';
                });
                
            }
			//console.log(users1);
        //  }

    });
});