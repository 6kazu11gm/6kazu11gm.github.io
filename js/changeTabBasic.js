/* ChangeTabBasic.js */
/* 2021.03.04 by Yuki.Sugaya*/

/* 最新の件数 */
nLatestCount = 20;

/* 年度の開始月 */
nStartMonthInFY = 1;

/* 件/ページ(ページャー用) */
nItemParPage = 10;

function initTabs( idBlist ) {

	// 引数チェック
    if(typeof idBlist !== 'string') return;

	var eBlist = document.getElementById(idBlist);
	if( !eBlist ) return;

	// class名から、言語判定を行う
	var bEn = $(eBlist).hasClass('basic-list-english') || ($(eBlist).attr('id').indexOf('-english') >=0);

	var eYTab = $(eBlist).find('.yearTabs').first();
	var eCTab = $(eBlist).find('.tabs').first();

	/////////////////////////////////////////////////
	// 情報パネル初期設定
	var init_info_panel = function(eBlist, bEn, eYTab, eCTab) {
		try {
			if($(eBlist).find('.infoPanel').length >0) return;

			var eTabs = $(eBlist).find('.yearTabs, .tabs').last();
			if($(eTabs).length <=0) return;

			/////////////////////////////////////////////////
			// 枠を追加
			$(eTabs).after('<div class="infoPanel"></div>');
			eInfo = $(eTabs).next('.infoPanel');

			if(bEn) {
				$(eInfo).append('<div class="clearTab"><span class="clear">Clear All</span></div>');
	    		$(eInfo).append('<div class="countTab">Results　<span class="view"></span>　of　<span class="total"></span></div>');
			} else {
				$(eInfo).append('<div class="clearTab"><span class="clear">絞込み条件をクリア</span></div>');
	    		$(eInfo).append('<div class="countTab">絞り込み結果 <span class="total"></span> 件中 <span class="view"></span> 件</div>');
			}

		} catch(e) {
			console.log("Err: "+ e.message +" in changeTabBasic.js");
		}
	};

	/////////////////////////////////////////////////
	// 情報パネル更新
	var update_info_panel = function(eBlist, bEn, eYTab, eCTab) {
		try {
			/////////////////////////////////////////////////
			// 総件数を更新
			$(eBlist).find('.countTab .total').first().text(''+ $(eBlist).find('.tabItems > li').length);
			$(eBlist).find('.countTab .view').first().text(''+ $(eBlist).find('.tabItems > li:not(.hidden)').length);
		} catch(e) {
			console.log("Err: "+ e.message +" in changeTabBasic.js");
		}
	};

	/////////////////////////////////////////////////
	// ページャー初期化
	var init_pager = function(eBlist, bEn, eYTab, eCTab) {
		try {
			if($(eBlist).find('.pager').length >0) return;

			if($(eBlist).find('.yearTabs, .tabs').length <=0) return;

			/////////////////////////////////////////////////
			// 枠を追加
			$(eBlist).append('<div class="pager" data-start-page="0" data-max-item="' +nItemParPage +'"></div>');
			ePager = $(eBlist).find('.pager');

			if(bEn) {
				$(ePager).append('<div class="moreBtn" hidden><span>MORE</span></div>');
			} else {
				$(ePager).append('<div class="moreBtn" hidden><span>もっと見る</span></div>');
			}

		} catch(e) {
			console.log("Err: "+ e.message +" in changeTabBasic.js");
		}
	};

	/////////////////////////////////////////////////
	// カテゴリタブ初期設定
	var init_category_tab = function(eBlist, bEn, eYTab, eCTab) {
		try {
			// カテゴリタブのliの第１子要素spanのclass名をliに付与
			$(eCTab).find('li:not(.all)').each( function() {
				var eFirstchild = $(this).children('span[class]').eq(0);
				var txCateClass = ''+ $(eFirstchild).attr('class');
				$(this).addClass(txCateClass);
			})

			// 各ulに階層classを付与
			var eCateLv = $(eCTab).children('ul');
			for( nLv=1; nLv<8; nLv++) {
				$(eCateLv).attr('data-category-level', nLv);			// Legacy
				$(eCateLv).addClass('categoryLv_' +nLv);

				eCateLv = $(eCateLv).children('li').children('ul');
				if( $(eCateLv).length <=0 ) break;
			}

			var txCateAll = "全て";
			if(bEn) {
				txCateAll = "All";
			}

			// 「全て」のタブを第２階層の先頭に追加
			if($(eCTab).find('li.all').length <= 0) {
				$(eCTab).children('ul').children('li').children('ul').each( function() {
					$(this).prepend('<li class="all"><span class="all" alt="' +txCateAll+ '"></span></li>');
					$(this).find('li.all').attr('aria-hidden', 'false');			// Compatibility
					$(this).find('li.all').removeAttr('hidden');
					$(this).find('li.all span.all').attr('aria-hidden', 'false');			// Compatibility
					$(this).find('li.all span.all').removeAttr('hidden');
				});
			}

	        // 「全て」のタブを第１階層の先頭に追加
			if($(eCTab).find('li.allall').length <= 0) {
		        $(eCTab).children('ul').prepend('<li class="allall"><span class="allall" alt="' +txCateAll+ '"></span></li>');
				$(this).find('li.allall').attr('aria-hidden', 'false');			// Compatibility
				$(this).find('li.allall').removeAttr('hidden');
				$(this).find('li.allall span.allall').attr('aria-hidden', 'false');			// Compatibility
				$(this).find('li.allall span.allall').removeAttr('hidden');
			}
		} catch(e) {
			console.log("Err: "+ e.message +" in changeTabBasic.js");
		}
	};


	/////////////////////////////////////////////////
	// カテゴリタブ更新
	var update_category_tab = function(eBlist, bEn, eYTab, eCTab) {
		try {
			// 第２階層内の同一ラベルのカテゴリを統合
			$(eCTab).children('ul').children('li').children('ul').each( function() {
				var eCate2 = $(this).children('li:not(.all)').children('span');

				for(var i=0; i<$(eCate2).length; i++) {
					var e1 = $(eCate2).eq(i);
					var txCateClass1 = $(e1).attr('class');

					for(var j=i+1; j<$(eCate2).length; j++) {
						var e2 = $(eCate2).eq(j);;

						if( $(e1).attr('alt') == $(e2).attr('alt') ) {
							var txCateClass2 = $(e2).attr('class');

							// エイリアスを設定
							var strAlias = $(e1).attr('data-alias') || txCateClass1;
							strAlias += ' ' +txCateClass2;
							$(e1).attr('data-alias', strAlias);

							// 記事にクラスを追加
							$(eBlist).find('.tabItems > li.' +txCateClass2 +'Elm').addClass(txCateClass1 +'Elm');

							// タブ削除
							$(e2).parent('li').remove();
						}
					}
				}
			});

			// リストに存在しないカテゴリのタブを非アクティブ
			$(eCTab).find('span:not(.all):not(.allall)').each( function() {
				var txCateClass = $(this).attr('class');
				if( !txCateClass
				 || ($(eBlist).find('.tabItems > li.' +txCateClass +'Elm').length <= 0) ) {
					$(this).attr('aria-hidden', 'true');	// Compatibility
					$(this).attr('hidden', 'true');
				} else {
					$(this).attr('aria-hidden', 'false');	// Compatibility
					$(this).removeAttr('hidden');
				}
			});

			// アクティブなタブがない階層の「全て」タブを非アクティブ
			$(eCTab).find('li.all').each( function() {
				if($(this).nextAll('li').children('span:not([hidden])').length <=0) {
					$(this).children('span').attr('aria-hidden', 'true');	// Compatibility
					$(this).children('span').attr('hidden', 'true');
				} else {
					$(this).children('span').attr('aria-hidden', 'false');	// Compatibility
					$(this).children('span').removeAttr('hidden');
				}
			});

			$(eCTab).find('li.allall').each( function() {
				if($(this).nextAll('li').children('span:not([hidden])').length <=0) {
					$(this).children('span').attr('aria-hidden', 'true');	// Compatibility
					$(this).children('span').attr('hidden', 'true');
				} else {
					$(this).children('span').attr('aria-hidden', 'false');	// Compatibility
					$(this).children('span').removeAttr('hidden');
				}
			});

			// アクティブなタブがない階層を非アクティブ
			$(eCTab).find('li:not(.all):not(.allall)').each( function() {
				if( $(this).find('span:not([hidden])').length <= 0 ) {
					$(this).attr('aria-hidden', 'true');	// Compatibility
					$(this).attr('hidden', 'true');
				} else {
					$(this).attr('aria-hidden', 'false');	// Compatibility
					$(this).removeAttr('hidden');
				}
			});

			// alt属性をspan内にテキスト化
			$(eCTab).find('span').each( function() {
				$(this).text( ''+$(this).attr('alt') );
			});
		} catch(e) {
			console.log("Err: "+ e.message +" in changeTabBasic.js");
		}
	};


	/////////////////////////////////////////////////
	// カテゴリアイコン更新
	var update_category_icon = function(eBlist, bEn, eYTab, eCTab) {
		try {
			// パーツ内にカテゴリが無ければ、ページ全体から検索
			var eExCTab = eCTab;
			if($(eExCTab).length <=0) {
				eExCTab = $('.basic-list, .basic-list-english, .basic-list2').find('.tabs').first();
			}
			if($(eExCTab).length <=0) return;

			var eCicon = $(eBlist).find('.tabItems .c_icon');

			// 全てクリア
			$(eCicon).find('span').removeAttr('category-level').removeAttr('data-category-group');

			// 各アイコンに、カテゴリレベルと、所属しているグループ名を付与
			$(eExCTab).children('ul').children('li').each( function() {
				var eCateLv = this;
				var txGroupClass = ''+ $(this).attr('class');

				for( nLv=1; nLv<8; nLv++) {
					$(eCateLv).children('span').each( function() {
						var txCateClass = $(this).attr('class');
						$(eCicon).find('span[class="' +txCateClass+ '"]').attr('category-level', nLv).attr('data-category-group', txGroupClass);
					});

					eCateLv = $(eCateLv).children('ul').children('li');
					if( $(eCateLv).length <=0 ) break;
				}
			});

			// alt属性をspan内にテキスト化
			$(eCicon).find('span').each( function() {
				$(this).text( ''+$(this).attr('alt') );
			});
		} catch(e) {
			console.log("Err: "+ e.message +" in changeTabBasic.js");
		}
	};

	/////////////////////////////////////////////////
	// 年タブ初期化
	var init_year_tab = function(eBlist, bEn, eYTab, eCTab) {
		try {
			// 年をコレクション
			var aYearList = [];
			$(eBlist).find('.tabItems > li').each( function() {
				var txEntryDate = $(this).attr('entrydate');
				if( !txEntryDate ) {
					return;
				}

				var aEntryDate = txEntryDate.split("/");
				if( aEntryDate.length != 3 ) {
					return;
				}

				var nYear = parseInt(aEntryDate[0], 10);
				if( parseInt(aEntryDate[1], 10) < nStartMonthInFY ) {
					--nYear;
				}
				aYearList.push( nYear );
			});

			// 重複を削除、ソートして、年タブを生成
			aYearList = aYearList.filter(function (x, i, self) {
				return self.indexOf(x) === i;
			});
			aYearList = aYearList.sort();
			$(eYTab).prepend('<ul></ul>');
			$.each( aYearList, function(i, nYear) {
				var txDecodeYear = (yearPrefix?yearPrefix:'') +nYear+ (yearSuffix?yearSuffix:'');
				if( (nStartMonthInFY != 1)
				 && (yearSuffix == '年') ) {
					txDecodeYear += '度';
				}
				$(eYTab).children('ul').prepend('<li><span class="year" data-year="' +nYear+ '" alt="' +txDecodeYear+ '"></span></li>');
			});

			// 年タブに最新を追加
	        var txYearLatest = "最新" +nLatestCount+ "件";
			if(bEn) {
				txYearLatest = "Latest " +nLatestCount;
			}
			$(eYTab).children('ul').prepend('<li class="latest"><span class="latest" alt="' +txYearLatest+ '"></span></li>');

			// alt属性をspan内にテキスト化
			$(eYTab).find('span').each( function() {
				$(this).text( ''+$(this).attr('alt') );
			});
		} catch(e) {
			console.log("Err: "+ e.message +" in changeTabBasic.js");
		}
	};

	/////////////////////////////////////////////////
	// リストを更新
	var update_newslist = function(eBlist, bEn, eYTab, eCTab) {
		try {
			var bMultiple = false;
			if( $(eBlist).closest('.ux_multi2_multiple_select, .ux_multi3_multiple_select').length >0 ) {
				bMultiple = true;
			}

			var eActiveList;

			// カテゴリ絞込み
			if( ($(eCTab).length >0) && $(eCTab).is(':visible') ) {
				var eActCate = $(eCTab).find('span[active="true"]');

				if(bMultiple) {
					// allallが表示状態なら、flatモード */
					var eAllAll = $(eCTab).find('li.allall span.allall');
					if( ($(eAllAll).length > 0) && ($(eAllAll).is(':visible')) ) {
						// マルチプルでフラットモードの場合は、全てをor条件
						eActiveList = $(null);
						$(eActiveList).removeClass('hidden');

						$(eActCate).each( function() {
							if( !$(this).hasClass('all') && !$(this).hasClass('allall') ) {
								var txCateClass = $(this).attr('class');
								eActiveList = $(eActiveList).add( $(eBlist).find('.tabItems > li.' + txCateClass +'Elm') );
							}
						});
					} else {
						// 第２階層内はor条件、第２階層同士はand条件。
						eActiveList = $(eBlist).find('.tabItems > li');
						$(eActiveList).addClass('hidden');

						var eGroup2 = $(eCTab).children('ul').children('li').children('span:not([hidden])').parent();
						$(eGroup2).each( function() {
							var eTargetGroup = this;
							var eActiveList2 = $(null);
							var eActCate2 = $(this).find('span[active="true"]');

							if( ($(eActCate2).length > 1)
							 || (!$(eActCate2).first().hasClass('all')) ) {
								$(eActCate2).each( function() {
									if( !$(this).hasClass('all') && !$(this).hasClass('allall') ) {
										var txCateClass = $(this).attr('class');
										eActiveList2 = $(eActiveList2).add( $(eBlist).find('.tabItems > li.' + txCateClass +'Elm') );
									}
								});
								eActiveList = $(eActiveList).filter( eActiveList2 );
							}
						});
					}
				} else {
					// マルチプルでない場合は、全てをand条件
					eActiveList = $(eBlist).find('.tabItems > li');
					$(eActiveList).addClass('hidden');

					$(eActCate).each( function() {
						if( !$(this).hasClass('all') && !$(this).hasClass('allall') ) {
							var txCateClass = $(this).attr('class');
							eActiveList = $(eActiveList).filter('.' + txCateClass +'Elm');
						}
					});
				}
			} else {
				eActiveList = $(eBlist).find('.tabItems > li');
				$(eActiveList).addClass('hidden');
			}

			// 年絞込み
			if( ($(eYTab).length >0) && $(eYTab).is(':visible') ) {
				var eActYear = $(eYTab).find('span[active="true"]');

				if( ($(eActYear).length != 1) || $(eActYear).hasClass('latest') ) {
					eActiveList = $(eActiveList).filter(':lt(' +nLatestCount+ ')');
				} else {
					if( nStartMonthInFY == 1 ) {
						var txYearAttr = $(eActYear).attr('data-year');
						eActiveList = $(eActiveList).filter('[entrydate^="' + txYearAttr +'"]');
					} else {
						var nYearAttr = parseInt($(eActYear).attr('data-year'), 10);
						eActiveList = $(eActiveList).filter('[entrydate^="' + nYearAttr +'"], [entrydate^="' + (nYearAttr+1) +'"]');
						eActiveList = $(eActiveList).filter(function (x, i, self) {
							var txEntryDate = $(this).attr('entrydate');
							if( !txEntryDate ) {
								return false;
							}

							var aEntryDate = txEntryDate.split("/");
							if( aEntryDate.length != 3 ) {
								return false;
							}

							var nYear = parseInt(aEntryDate[0], 10);
							if( parseInt(aEntryDate[1], 10) < nStartMonthInFY ) {
								--nYear;
							}
							return( nYear == nYearAttr );
						});
					}
				}
			}

			/* ページャー */
			var ePager = $(eBlist).find('.pager');
			if( ($(ePager).length >0) && $(ePager).is(':visible') ) {
				nMax = $(ePager).attr('data-max-item');
				if( !nMax ) {
					nMax = nItemParPage;
				} else {
					nMax  = parseInt(nMax, 10);
				}

				if( nMax < $(eActiveList).length ) {
					$(ePager).find('.moreBtn').removeAttr('hidden');
				} else {
					$(ePager).find('.moreBtn').attr('hidden', true);
				}

				eActiveList = $(eActiveList).filter(':lt(' +nMax+ ')');
			}

			$(eActiveList).removeClass('hidden');
			$(eBlist).find('.countTab .view').first().text(''+ $(eBlist).find('.tabItems > li:not(.hidden)').length);

		} catch(e) {
			console.log("Err: "+ e.message +" in changeTabBasic.js");
		}
	};

	/////////////////////////////////////////////////
	// ハッシュタグを更新
	var update_hash = function(eBlist, bEn, eYTab, eCTab) {
		if( (window == window.parent)
		 && ($(eBlist).closest('.ux_multi3_hash_update').length >0) ) {
			var txHash = "";

			var eActYear = $(eYTab).find('span.year[active]').first();
			if( $(eActYear).length >0 ) {
				txHash += '*' + $(eActYear).attr('data-year');
			}

			$(eCTab).find('span[active]').each( function() {
				if( $(this).attr('class') == 'allall' ) {
				} else if( $(this).attr('class') == 'all' ) {
				} else {
					txHash +=  '*' + $(this).attr('class');
				}
			});

			if( txHash == '' ) {
				txHash = '*';
			}
			$(location).attr('hash', txHash);
		}
	};

	/////////////////////////////////////////////////
	// 初期設定
	if(bEn) { $(eBlist).addClass('english'); }

	if( $(eBlist).find('.tabItems > li').length <=0 ) {
		$(eBlist).addClass('no-list');
	}

	$(eBlist).addClass('initial');

	init_category_tab(eBlist, bEn, eYTab, eCTab);
	init_year_tab(eBlist, bEn, eYTab, eCTab);
	init_info_panel(eBlist, bEn, eYTab, eCTab);
	init_pager(eBlist, bEn, eYTab, eCTab);

	try {

	    // 非アクティブも含めて、全てのタブに、絞込み設定を付与
		$(eCTab).find('span').click( function() {
			try {
				$(eBlist).removeClass('initial');

				var eAct = this;
				var bMultiple = false;
				if( $(eBlist).closest('.ux_multi2_multiple_select, .ux_multi3_multiple_select').length >0 ) {
					bMultiple = true;
				}

				// allallが表示状態なら、flatモード */
				var eAllAll = $(eCTab).find('li.allall span.allall');
				if( ($(eAllAll).length > 0) && ($(eAllAll).is(':visible')) ) {
					if(bMultiple) {
						// マルチプルセレクト: all以外はtoggle動作、allallは全て非アクティブに
						if( $(eAct).hasClass('allall') ) {
							$(eCTab).find('li:not([hidden])').find('span').removeAttr('active');
						} else {
							if( !!$(eAct).attr('active') ) {
								$(eAct).removeAttr('active');
							} else {
								$(eAct).attr('active', 'true');
								$(this).find('span.allall').removeAttr('active');
							}

							if( $(eCTab).find('span[active]').length <= 0 ) {
								$(eCTab).find('span.all').attr('active', 'true');
							}
						}
					} else {
						// カテゴリ全てを非アクティブに
						$(eCTab).find('li span').removeAttr('active');

						$(eAct).attr('active', 'true');
					}
				} else {
					var eGroup2 = $(eCTab).children('ul').children('li').children('span:not([hidden])').parent();

					if(bMultiple) {
						// マルチプルセレクト: all以外はtoggle動作、allは同第２階層内を全て非アクティブに
						if( $(eAct).hasClass('all') ) {
							$(eGroup2).each( function() {
								if( $(this).find(eAct).length > 0 ) {
									$(this).find('span').removeAttr('active');
								}
							});
							$(eAct).attr('active', 'true');
						} else {
							if( !!$(eAct).attr('active') ) {
								$(eAct).removeAttr('active');
							} else {
								$(eAct).attr('active', 'true');

								$(eGroup2).each( function() {
									if( $(this).find(eAct).length > 0 ) {
										$(this).find('span.all').removeAttr('active');
									}
								});
							}

							$(eGroup2).each( function() {
								if( $(this).find('span[active]').length <= 0 ) {
									$(this).find('span.all').attr('active', 'true');
								}
							});
						}
					} else {
				        // クリックした同第２階層内を全て非アクティブに
						$(eGroup2).each( function() {
							if( $(this).find(eAct).length > 0 ) {
								$(this).find('span').removeAttr('active');

//console.log("select cate[" +$(eAct).attr('class')+ "] in group[" +$(eGroup2).attr('class')+ "]");
							}
						});

						$(eAct).attr('active', 'true');
					}

					$(eAllAll).removeAttr('active');
				}

				// 更新
				update_newslist(eBlist, bEn, eYTab, eCTab);
				update_info_panel(eBlist, bEn, eYTab, eCTab);
				update_hash(eBlist, bEn, eYTab, eCTab);

				$(eBlist).trigger('change');
			} catch(e) {
				console.log("Err: "+ e.message +" in changeTabBasic.js");
			}
		});

	    // 年タブに、絞込み設定を付与
		$(eYTab).find('span').click( function() {
			try {
				$(eBlist).removeClass('initial');

				$(eYTab).find('span').removeAttr('active');
				$(this).attr('active', 'true');

				// 更新
				update_newslist(eBlist, bEn, eYTab, eCTab);
				update_info_panel(eBlist, bEn, eYTab, eCTab);
				update_hash(eBlist, bEn, eYTab, eCTab);

				$(eBlist).trigger('change');
			} catch(e) {
				console.log("Err: "+ e.message +" in changeTabBasic.js");
			}
		});

		// クリアタブに、絞込みクリア設定を付与
		$(eBlist).find('.clearTab span.clear').first().click( function() {
			try {
				// 年全てを非アクティブに
				$(eYTab).find('span').removeAttr('active');
				$(eYTab).find('span:visible').first().attr('active', 'true');

				// カテゴリ全てを非アクティブに
				$(eCTab).find('li:not([hidden])').find('span').removeAttr('active');

				var eAllAll = $(eCTab).find('li.allall span.allall');
				if( ($(eAllAll).length > 0) && ($(eAllAll).is(':visible')) ) {
			        // 第１階層のallをアクティブに
					$(eAllAll).attr('active', 'true');
				} else {
			        // 各第２階層のallをアクティブに
					$(eCTab).find('ul.categoryLv_2').find('span.all').attr('active', 'true')
				}

				// 更新
				update_newslist(eBlist, bEn, eYTab, eCTab);
				update_info_panel(eBlist, bEn, eYTab, eCTab);
				update_hash(eBlist, bEn, eYTab, eCTab);

				$(eBlist).trigger('change');
			} catch(e) {
				console.log("Err: "+ e.message +" in changeTabBasic.js");
			}
		});

		// ページャーに、表示件数設定を付与
		$(eBlist).find('.pager .moreBtn').first().click( function() {
			try {
				var ePager = $(this).closest('.pager');

				var nMax = $(ePager).attr('data-max-item');
				if( !nMax )  {
					nMax = nItemParPage;
				} else {
					nMax  = parseInt(nMax, 10);
				}

				nMax += nItemParPage;
				$(ePager).attr('data-max-item', nMax);

				// 更新
				update_newslist(eBlist, bEn, eYTab, eCTab);
				update_info_panel(eBlist, bEn, eYTab, eCTab);
				update_hash(eBlist, bEn, eYTab, eCTab);

				$(eBlist).trigger('change');
			} catch(e) {
				console.log("Err: "+ e.message +" in changeTabBasic.js");
			}
		});

	} catch(e) {
		console.log("Err: "+ e.message +" in changeTabBasic.js");
	}

	$(document).ready(function(){
		window.setTimeout( function() {
			try {
				// カテゴリタブ初期化
				if($(eCTab).length >0) {
					var eAllAll = $(eCTab).find('li.allall span.allall');
					if( ($(eAllAll).length > 0) && ($(eAllAll).is(':visible')) ) {
				        // 第１階層のallをアクティブに
						$(eAllAll).attr('active', 'true');
					} else {
				        // 各第２階層のallをアクティブに
						$(eCTab).find('ul.categoryLv_2').find('span.all').attr('active', 'true')
					}
				}

				// 年タブ初期化
				$(eYTab).find('li span').removeAttr('active');
				$(eYTab).find('li span:visible').first().attr('active', 'true');

				update_category_tab(eBlist, bEn, eYTab, eCTab);
				update_category_icon(eBlist, bEn, eYTab, eCTab);
				update_newslist(eBlist, bEn, eYTab, eCTab);
				update_info_panel(eBlist, bEn, eYTab, eCTab);
			} catch(e) {
				console.log("Err: "+ e.message +" in changeTabBasic.js");
			}
		}, 10);
	});

	$(eBlist).bind('update', function() {
		try {
			update_category_tab(eBlist, bEn, eYTab, eCTab);
			update_category_icon(eBlist, bEn, eYTab, eCTab);
			update_newslist(eBlist, bEn, eYTab, eCTab);
			update_info_panel(eBlist, bEn, eYTab, eCTab);

			$(eBlist).trigger('change');
		} catch(e) {
			console.log("Err: "+ e.message +" in changeTabBasic.js");
		}
	});

	var rehash = function() {
		try {
			// メインエリア外はhash対象外
			if($(eBlist).closest('#sharewithmain').length <=0) return;

			var Hash = $(location).attr('hash');
			var aSelect = Hash.split('*');

			if( ($(eBlist).find('.tabItems > li').length >0)
			 && (aSelect[0] == '#') ) {
				// 年全てを初期化
				$(eYTab).find('span').removeAttr('active');

				// カテゴリ全てを初期化
				$(eCTab).find('li:not([hidden])').find('span').removeAttr('active');

				for(var i=1; i<aSelect.length; i++) {
					var txSelect = aSelect[i];
					if( !txSelect ) {
						continue;
					} else if( txSelect == 'all') {
						continue;
					} else if( txSelect == 'latest') {
						$(eYTab).find('span.latest').attr('active', 'true');
					} else if( txSelect.match(/^\d\d*/) ) {
						$(eYTab).find('span.year[data-year=' +txSelect+ ']').attr('active', 'true');
					} else {
						$(eCTab).find('span').each( function() {
							if( $(this).hasClass( txSelect ) ) {
								$(this).attr('active', 'true');
							}
						});
					}
				}

				// 年の選択が無ければ
				if( $(eYTab).find('span[active]').length <= 0 ) {
					$(eYTab).find('span:visible').first().attr('active', 'true');
				}

				// カテゴリの選択が無ければ
				var eAllAll = $(eCTab).find('li.allall span.allall');
				if( ($(eAllAll).length > 0) && ($(eAllAll).is(':visible')) ) {
			        // 第１階層のallをアクティブに
					if( $(eCTab).find('span[active]').length <= 0 ) {
						$(eAllAll).attr('active', 'true');
					}
				} else {
					// 各第２階層のallをアクティブに
					$(eCTab).find('ul.categoryLv_2').each( function() {
						if( $(this).find('span[active]').length <= 0 ) {
							$(this).find('span.all').attr('active', 'true');
						}
					});
				}

				update_newslist(eBlist, bEn, eYTab, eCTab);
				update_info_panel(eBlist, bEn, eYTab, eCTab);
			}

		} catch(e) {
			console.log("Err: "+ e.message +" in changeTabBasic.js");
		}
	};

	$(document).ready(function(){
		window.setTimeout( function() {
			rehash();
		}, 20);
	});

	$(window).on("load", function() {
		window.setTimeout( function() {
			rehash();
		}, 10);
	});

	$(window).bind("rehash", function() {
		rehash();
	});

}
