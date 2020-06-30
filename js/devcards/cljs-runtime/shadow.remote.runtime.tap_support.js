goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60493,p__60494){
var map__60495 = p__60493;
var map__60495__$1 = (((((!((map__60495 == null))))?(((((map__60495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60495):map__60495);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60495__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60496 = p__60494;
var map__60496__$1 = (((((!((map__60496 == null))))?(((((map__60496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60496):map__60496);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60496__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60499,p__60500){
var map__60501 = p__60499;
var map__60501__$1 = (((((!((map__60501 == null))))?(((((map__60501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60501):map__60501);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60501__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60502 = p__60500;
var map__60502__$1 = (((((!((map__60502 == null))))?(((((map__60502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60502):map__60502);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60502__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60507,p__60508){
var map__60509 = p__60507;
var map__60509__$1 = (((((!((map__60509 == null))))?(((((map__60509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60509):map__60509);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60509__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60509__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60510 = p__60508;
var map__60510__$1 = (((((!((map__60510 == null))))?(((((map__60510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60510):map__60510);
var msg = map__60510__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60510__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60513 = obj_support;
var map__60513__$1 = (((((!((map__60513 == null))))?(((((map__60513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60513):map__60513);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60513__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60506_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60506_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60505_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60505_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60515,tid){
var map__60516 = p__60515;
var map__60516__$1 = (((((!((map__60516 == null))))?(((((map__60516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60516):map__60516);
var svc = map__60516__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60516__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60522 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60523 = null;
var count__60524 = (0);
var i__60525 = (0);
while(true){
if((i__60525 < count__60524)){
var tid = chunk__60523.cljs$core$IIndexed$_nth$arity$2(null,i__60525);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60529 = seq__60522;
var G__60530 = chunk__60523;
var G__60531 = count__60524;
var G__60532 = (i__60525 + (1));
seq__60522 = G__60529;
chunk__60523 = G__60530;
count__60524 = G__60531;
i__60525 = G__60532;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60522);
if(temp__5735__auto__){
var seq__60522__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60522__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60522__$1);
var G__60533 = cljs.core.chunk_rest(seq__60522__$1);
var G__60534 = c__4609__auto__;
var G__60535 = cljs.core.count(c__4609__auto__);
var G__60536 = (0);
seq__60522 = G__60533;
chunk__60523 = G__60534;
count__60524 = G__60535;
i__60525 = G__60536;
continue;
} else {
var tid = cljs.core.first(seq__60522__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60537 = cljs.core.next(seq__60522__$1);
var G__60538 = null;
var G__60539 = (0);
var G__60540 = (0);
seq__60522 = G__60537;
chunk__60523 = G__60538;
count__60524 = G__60539;
i__60525 = G__60540;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60518_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60518_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60519_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60519_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60520_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60520_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60521_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60521_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60526){
var map__60527 = p__60526;
var map__60527__$1 = (((((!((map__60527 == null))))?(((((map__60527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60527):map__60527);
var svc = map__60527__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60527__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60527__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map