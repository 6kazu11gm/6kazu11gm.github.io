/* newIconBasic.js */
/* 2020.06.17 by Yuki.Sugaya */

function showNewIcon( idBlist ) {
	try {
	    if(typeof idBlist !== 'string') return;

		var eBlist = document.getElementById(idBlist);
		if( !eBlist ) return;

		if( $(eBlist).find('.tabItems').length <1 ) return;

		var dateNow = new Date();
		var dayTerm = null;

		var attrTerm = $(eBlist).find('.tabItems').attr('data-term');
		if( !!attrTerm ) {
			dayTerm = parseInt( attrTerm, 10 );
			if( isNaN(dayTerm) || (dayTerm <= 0) ) {
				dayTerm = null;
			}
		}

		$(eBlist).find('.tabItems > li').each( function() {
//console.log("e=" +!$(this).attr('entrydate')+ " t=" +!$(this).attr('term') );

			// 個別に日数指定があれば上書き
			if( !attrTerm ) {
				if( !!$(this).attr('term') ) {
					dayTerm = parseInt( $(this).attr('term'), 10 );
					if( isNaN(dayTerm) || (dayTerm <= 0) ) {
						dayTerm = null;
					}
				}
			}

			if( !!$(this).attr('entrydate') ) {
				var aEntryDate = $(this).attr('entrydate').split("/");

				if( (aEntryDate.length != 3) ) {
					return;
				}

//console.log("entrydate= " +aEntryDate[0]+ "/" +aEntryDate[1]+ "/" +aEntryDate[2] );

				var dateEntry = new Date(aEntryDate[0], aEntryDate[1]-1, aEntryDate[2], 0, 0, 0);
				var dayPassed = Math.ceil( (dateNow.getTime() - dateEntry.getTime())/(24*60*60*1000) );
//console.log("entry= " +dateEntry.getTime() +" :term= " +dayTerm+ ":passed= " +dayPassed );
				if( !!dayTerm && dayPassed <= dayTerm ) {
					$(this).find('.n_icon').css('display', 'inline');
				}
			}

		});
	} catch(e) {
		console.log("Err: "+ e.message +" in newIconBasic.js");
	}
}
