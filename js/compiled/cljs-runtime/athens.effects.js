goog.provide('athens.effects');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('posh.reagent');
goog.require('re_frame.core');
var G__52177_52277 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__52178_52278 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52177_52277,G__52178_52278) : re_frame.core.reg_fx.call(null,G__52177_52277,G__52178_52278));
var G__52179_52279 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__52180_52280 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52179_52279,G__52180_52280) : re_frame.core.reg_fx.call(null,G__52179_52279,G__52180_52280));
var G__52181_52281 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__52182_52282 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52181_52281,G__52182_52282) : re_frame.core.reg_fx.call(null,G__52181_52281,G__52182_52282));
var G__52183_52283 = new cljs.core.Keyword(null,"http","http",382524695);
var G__52184_52284 = (function (p__52185){
var map__52186 = p__52185;
var map__52186__$1 = (((((!((map__52186 == null))))?(((((map__52186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52186):map__52186);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52186__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52186__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52186__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52186__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52186__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__38856__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_52235){
var state_val_52236 = (state_52235[(1)]);
if((state_val_52236 === (7))){
var inst_52201 = (state_52235[(7)]);
var inst_52201__$1 = (state_52235[(2)]);
var inst_52203 = (inst_52201__$1 == null);
var inst_52204 = cljs.core.not(inst_52203);
var state_52235__$1 = (function (){var statearr_52237 = state_52235;
(statearr_52237[(7)] = inst_52201__$1);

return statearr_52237;
})();
if(inst_52204){
var statearr_52238_52285 = state_52235__$1;
(statearr_52238_52285[(1)] = (8));

} else {
var statearr_52239_52286 = state_52235__$1;
(statearr_52239_52286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52236 === (1))){
var state_52235__$1 = state_52235;
var G__52240_52287 = method;
var G__52240_52288__$1 = (((G__52240_52287 instanceof cljs.core.Keyword))?G__52240_52287.fqn:null);
switch (G__52240_52288__$1) {
case "post":
var statearr_52241_52290 = state_52235__$1;
(statearr_52241_52290[(1)] = (3));


break;
case "get":
var statearr_52242_52291 = state_52235__$1;
(statearr_52242_52291[(1)] = (4));


break;
case "put":
var statearr_52243_52292 = state_52235__$1;
(statearr_52243_52292[(1)] = (5));


break;
case "delete":
var statearr_52244_52293 = state_52235__$1;
(statearr_52244_52293[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52240_52288__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52236 === (4))){
var state_52235__$1 = state_52235;
var statearr_52245_52294 = state_52235__$1;
(statearr_52245_52294[(2)] = cljs_http.client.get);

(statearr_52245_52294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52236 === (15))){
var inst_52201 = (state_52235[(7)]);
var state_52235__$1 = state_52235;
var statearr_52246_52295 = state_52235__$1;
(statearr_52246_52295[(2)] = inst_52201);

(statearr_52246_52295[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52236 === (13))){
var inst_52214 = (state_52235[(2)]);
var state_52235__$1 = state_52235;
var statearr_52247_52296 = state_52235__$1;
(statearr_52247_52296[(2)] = inst_52214);

(statearr_52247_52296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52236 === (6))){
var state_52235__$1 = state_52235;
var statearr_52248_52297 = state_52235__$1;
(statearr_52248_52297[(2)] = cljs_http.client.delete$);

(statearr_52248_52297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52236 === (17))){
var inst_52225 = (state_52235[(8)]);
var inst_52227 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_52225);
var inst_52228 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_52227) : re_frame.core.dispatch.call(null,inst_52227));
var state_52235__$1 = state_52235;
var statearr_52249_52298 = state_52235__$1;
(statearr_52249_52298[(2)] = inst_52228);

(statearr_52249_52298[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52236 === (3))){
var state_52235__$1 = state_52235;
var statearr_52250_52299 = state_52235__$1;
(statearr_52250_52299[(2)] = cljs_http.client.post);

(statearr_52250_52299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52236 === (12))){
var state_52235__$1 = state_52235;
var statearr_52251_52300 = state_52235__$1;
(statearr_52251_52300[(2)] = false);

(statearr_52251_52300[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52236 === (2))){
var inst_52198 = (state_52235[(2)]);
var inst_52199 = (inst_52198.cljs$core$IFn$_invoke$arity$2 ? inst_52198.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_52198.call(null,url,opts));
var state_52235__$1 = state_52235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52235__$1,(7),inst_52199);
} else {
if((state_val_52236 === (19))){
var inst_52233 = (state_52235[(2)]);
var state_52235__$1 = state_52235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52235__$1,inst_52233);
} else {
if((state_val_52236 === (11))){
var state_52235__$1 = state_52235;
var statearr_52252_52301 = state_52235__$1;
(statearr_52252_52301[(2)] = true);

(statearr_52252_52301[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52236 === (9))){
var state_52235__$1 = state_52235;
var statearr_52253_52302 = state_52235__$1;
(statearr_52253_52302[(2)] = false);

(statearr_52253_52302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52236 === (5))){
var state_52235__$1 = state_52235;
var statearr_52254_52303 = state_52235__$1;
(statearr_52254_52303[(2)] = cljs_http.client.put);

(statearr_52254_52303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52236 === (14))){
var inst_52201 = (state_52235[(7)]);
var inst_52220 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52201);
var state_52235__$1 = state_52235;
var statearr_52255_52304 = state_52235__$1;
(statearr_52255_52304[(2)] = inst_52220);

(statearr_52255_52304[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52236 === (16))){
var inst_52223 = (state_52235[(9)]);
var inst_52223__$1 = (state_52235[(2)]);
var inst_52224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52223__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_52225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52223__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_52235__$1 = (function (){var statearr_52256 = state_52235;
(statearr_52256[(9)] = inst_52223__$1);

(statearr_52256[(8)] = inst_52225);

return statearr_52256;
})();
if(cljs.core.truth_(inst_52224)){
var statearr_52257_52305 = state_52235__$1;
(statearr_52257_52305[(1)] = (17));

} else {
var statearr_52258_52306 = state_52235__$1;
(statearr_52258_52306[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52236 === (10))){
var inst_52218 = (state_52235[(2)]);
var state_52235__$1 = state_52235;
if(cljs.core.truth_(inst_52218)){
var statearr_52259_52307 = state_52235__$1;
(statearr_52259_52307[(1)] = (14));

} else {
var statearr_52260_52308 = state_52235__$1;
(statearr_52260_52308[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52236 === (18))){
var inst_52223 = (state_52235[(9)]);
var inst_52230 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_52223);
var inst_52231 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_52230) : re_frame.core.dispatch.call(null,inst_52230));
var state_52235__$1 = state_52235;
var statearr_52261_52309 = state_52235__$1;
(statearr_52261_52309[(2)] = inst_52231);

(statearr_52261_52309[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52236 === (8))){
var inst_52201 = (state_52235[(7)]);
var inst_52206 = inst_52201.cljs$lang$protocol_mask$partition0$;
var inst_52207 = (inst_52206 & (64));
var inst_52208 = inst_52201.cljs$core$ISeq$;
var inst_52209 = (cljs.core.PROTOCOL_SENTINEL === inst_52208);
var inst_52210 = ((inst_52207) || (inst_52209));
var state_52235__$1 = state_52235;
if(cljs.core.truth_(inst_52210)){
var statearr_52262_52310 = state_52235__$1;
(statearr_52262_52310[(1)] = (11));

} else {
var statearr_52263_52311 = state_52235__$1;
(statearr_52263_52311[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var athens$effects$state_machine__38789__auto__ = null;
var athens$effects$state_machine__38789__auto____0 = (function (){
var statearr_52264 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52264[(0)] = athens$effects$state_machine__38789__auto__);

(statearr_52264[(1)] = (1));

return statearr_52264;
});
var athens$effects$state_machine__38789__auto____1 = (function (state_52235){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_52235);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e52265){if((e52265 instanceof Object)){
var ex__38792__auto__ = e52265;
var statearr_52266_52312 = state_52235;
(statearr_52266_52312[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52265;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52313 = state_52235;
state_52235 = G__52313;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$effects$state_machine__38789__auto__ = function(state_52235){
switch(arguments.length){
case 0:
return athens$effects$state_machine__38789__auto____0.call(this);
case 1:
return athens$effects$state_machine__38789__auto____1.call(this,state_52235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__38789__auto____0;
athens$effects$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__38789__auto____1;
return athens$effects$state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_52267 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_52267[(6)] = c__38856__auto__);

return statearr_52267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));

return c__38856__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52183_52283,G__52184_52284) : re_frame.core.reg_fx.call(null,G__52183_52283,G__52184_52284));
var G__52269_52314 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__52270_52315 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__52271){
var map__52272 = p__52271;
var map__52272__$1 = (((((!((map__52272 == null))))?(((((map__52272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52272):map__52272);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52272__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52272__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52272__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52272__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__52275 = action;
var G__52275__$1 = (((G__52275 instanceof cljs.core.Keyword))?G__52275.fqn:null);
switch (G__52275__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52275__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52269_52314,G__52270_52315) : re_frame.core.reg_fx.call(null,G__52269_52314,G__52270_52315));

//# sourceMappingURL=athens.effects.js.map