goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45100){
var map__45101 = p__45100;
var map__45101__$1 = (((((!((map__45101 == null))))?(((((map__45101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45101):map__45101);
var m = map__45101__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45101__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45101__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45103_45312 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45104_45313 = null;
var count__45105_45314 = (0);
var i__45106_45315 = (0);
while(true){
if((i__45106_45315 < count__45105_45314)){
var f_45316 = chunk__45104_45313.cljs$core$IIndexed$_nth$arity$2(null,i__45106_45315);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45316], 0));


var G__45317 = seq__45103_45312;
var G__45318 = chunk__45104_45313;
var G__45319 = count__45105_45314;
var G__45320 = (i__45106_45315 + (1));
seq__45103_45312 = G__45317;
chunk__45104_45313 = G__45318;
count__45105_45314 = G__45319;
i__45106_45315 = G__45320;
continue;
} else {
var temp__5735__auto___45321 = cljs.core.seq(seq__45103_45312);
if(temp__5735__auto___45321){
var seq__45103_45322__$1 = temp__5735__auto___45321;
if(cljs.core.chunked_seq_QMARK_(seq__45103_45322__$1)){
var c__4609__auto___45323 = cljs.core.chunk_first(seq__45103_45322__$1);
var G__45324 = cljs.core.chunk_rest(seq__45103_45322__$1);
var G__45325 = c__4609__auto___45323;
var G__45326 = cljs.core.count(c__4609__auto___45323);
var G__45327 = (0);
seq__45103_45312 = G__45324;
chunk__45104_45313 = G__45325;
count__45105_45314 = G__45326;
i__45106_45315 = G__45327;
continue;
} else {
var f_45328 = cljs.core.first(seq__45103_45322__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45328], 0));


var G__45329 = cljs.core.next(seq__45103_45322__$1);
var G__45330 = null;
var G__45331 = (0);
var G__45332 = (0);
seq__45103_45312 = G__45329;
chunk__45104_45313 = G__45330;
count__45105_45314 = G__45331;
i__45106_45315 = G__45332;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45333 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45333], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45333)))?cljs.core.second(arglists_45333):arglists_45333)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45108_45338 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45109_45339 = null;
var count__45110_45340 = (0);
var i__45111_45341 = (0);
while(true){
if((i__45111_45341 < count__45110_45340)){
var vec__45123_45342 = chunk__45109_45339.cljs$core$IIndexed$_nth$arity$2(null,i__45111_45341);
var name_45343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45123_45342,(0),null);
var map__45126_45344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45123_45342,(1),null);
var map__45126_45345__$1 = (((((!((map__45126_45344 == null))))?(((((map__45126_45344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45126_45344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45126_45344):map__45126_45344);
var doc_45346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45126_45345__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45126_45345__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45343], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45347], 0));

if(cljs.core.truth_(doc_45346)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45346], 0));
} else {
}


var G__45352 = seq__45108_45338;
var G__45353 = chunk__45109_45339;
var G__45354 = count__45110_45340;
var G__45355 = (i__45111_45341 + (1));
seq__45108_45338 = G__45352;
chunk__45109_45339 = G__45353;
count__45110_45340 = G__45354;
i__45111_45341 = G__45355;
continue;
} else {
var temp__5735__auto___45356 = cljs.core.seq(seq__45108_45338);
if(temp__5735__auto___45356){
var seq__45108_45357__$1 = temp__5735__auto___45356;
if(cljs.core.chunked_seq_QMARK_(seq__45108_45357__$1)){
var c__4609__auto___45358 = cljs.core.chunk_first(seq__45108_45357__$1);
var G__45359 = cljs.core.chunk_rest(seq__45108_45357__$1);
var G__45360 = c__4609__auto___45358;
var G__45361 = cljs.core.count(c__4609__auto___45358);
var G__45362 = (0);
seq__45108_45338 = G__45359;
chunk__45109_45339 = G__45360;
count__45110_45340 = G__45361;
i__45111_45341 = G__45362;
continue;
} else {
var vec__45132_45363 = cljs.core.first(seq__45108_45357__$1);
var name_45364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45132_45363,(0),null);
var map__45135_45365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45132_45363,(1),null);
var map__45135_45366__$1 = (((((!((map__45135_45365 == null))))?(((((map__45135_45365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45135_45365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45135_45365):map__45135_45365);
var doc_45367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45135_45366__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45135_45366__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45364], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45368], 0));

if(cljs.core.truth_(doc_45367)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45367], 0));
} else {
}


var G__45369 = cljs.core.next(seq__45108_45357__$1);
var G__45370 = null;
var G__45371 = (0);
var G__45372 = (0);
seq__45108_45338 = G__45369;
chunk__45109_45339 = G__45370;
count__45110_45340 = G__45371;
i__45111_45341 = G__45372;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__45138 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45139 = null;
var count__45140 = (0);
var i__45141 = (0);
while(true){
if((i__45141 < count__45140)){
var role = chunk__45139.cljs$core$IIndexed$_nth$arity$2(null,i__45141);
var temp__5735__auto___45373__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45373__$1)){
var spec_45374 = temp__5735__auto___45373__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45374)], 0));
} else {
}


var G__45375 = seq__45138;
var G__45376 = chunk__45139;
var G__45377 = count__45140;
var G__45378 = (i__45141 + (1));
seq__45138 = G__45375;
chunk__45139 = G__45376;
count__45140 = G__45377;
i__45141 = G__45378;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45138);
if(temp__5735__auto____$1){
var seq__45138__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45138__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45138__$1);
var G__45379 = cljs.core.chunk_rest(seq__45138__$1);
var G__45380 = c__4609__auto__;
var G__45381 = cljs.core.count(c__4609__auto__);
var G__45382 = (0);
seq__45138 = G__45379;
chunk__45139 = G__45380;
count__45140 = G__45381;
i__45141 = G__45382;
continue;
} else {
var role = cljs.core.first(seq__45138__$1);
var temp__5735__auto___45383__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45383__$2)){
var spec_45384 = temp__5735__auto___45383__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45384)], 0));
} else {
}


var G__45385 = cljs.core.next(seq__45138__$1);
var G__45386 = null;
var G__45387 = (0);
var G__45388 = (0);
seq__45138 = G__45385;
chunk__45139 = G__45386;
count__45140 = G__45387;
i__45141 = G__45388;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__45389 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45390 = cljs.core.ex_cause(t);
via = G__45389;
t = G__45390;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__45182 = datafied_throwable;
var map__45182__$1 = (((((!((map__45182 == null))))?(((((map__45182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45182):map__45182);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45182__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45182__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45182__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45183 = cljs.core.last(via);
var map__45183__$1 = (((((!((map__45183 == null))))?(((((map__45183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45183):map__45183);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45183__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45183__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45183__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45184 = data;
var map__45184__$1 = (((((!((map__45184 == null))))?(((((map__45184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45184):map__45184);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45184__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45184__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45184__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45185 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45185__$1 = (((((!((map__45185 == null))))?(((((map__45185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45185):map__45185);
var top_data = map__45185__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45185__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45214 = phase;
var G__45214__$1 = (((G__45214 instanceof cljs.core.Keyword))?G__45214.fqn:null);
switch (G__45214__$1) {
case "read-source":
var map__45215 = data;
var map__45215__$1 = (((((!((map__45215 == null))))?(((((map__45215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45215):map__45215);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45215__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45215__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45224 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45224__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45224,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45224);
var G__45224__$2 = (cljs.core.truth_((function (){var fexpr__45225 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45225.cljs$core$IFn$_invoke$arity$1 ? fexpr__45225.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45225.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45224__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45224__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45224__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45224__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45231 = top_data;
var G__45231__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45231,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45231);
var G__45231__$2 = (cljs.core.truth_((function (){var fexpr__45238 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45238.cljs$core$IFn$_invoke$arity$1 ? fexpr__45238.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45238.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45231__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45231__$1);
var G__45231__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45231__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45231__$2);
var G__45231__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45231__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45231__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45231__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45231__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45242 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45242,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45242,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45242,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45242,(3),null);
var G__45249 = top_data;
var G__45249__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45249,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45249);
var G__45249__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45249__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45249__$1);
var G__45249__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45249__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45249__$2);
var G__45249__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45249__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45249__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45249__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45249__$4;
}

break;
case "execution":
var vec__45258 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45258,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45258,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45258,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45258,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45174_SHARP_){
var or__4185__auto__ = (p1__45174_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45262 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45262.cljs$core$IFn$_invoke$arity$1 ? fexpr__45262.cljs$core$IFn$_invoke$arity$1(p1__45174_SHARP_) : fexpr__45262.call(null,p1__45174_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45263 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45263__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45263,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45263);
var G__45263__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45263__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45263__$1);
var G__45263__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45263__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45263__$2);
var G__45263__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45263__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45263__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45263__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45263__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45214__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45268){
var map__45269 = p__45268;
var map__45269__$1 = (((((!((map__45269 == null))))?(((((map__45269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45269):map__45269);
var triage_data = map__45269__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__45272 = phase;
var G__45272__$1 = (((G__45272 instanceof cljs.core.Keyword))?G__45272.fqn:null);
switch (G__45272__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45273 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45274 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45275 = loc;
var G__45276 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45278_45400 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45279_45401 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45280_45402 = true;
var _STAR_print_fn_STAR__temp_val__45281_45403 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45280_45402);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45281_45403);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45266_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45266_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45279_45401);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45278_45400);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45273,G__45274,G__45275,G__45276) : format.call(null,G__45273,G__45274,G__45275,G__45276));

break;
case "macroexpansion":
var G__45283 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45284 = cause_type;
var G__45285 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45286 = loc;
var G__45287 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45283,G__45284,G__45285,G__45286,G__45287) : format.call(null,G__45283,G__45284,G__45285,G__45286,G__45287));

break;
case "compile-syntax-check":
var G__45288 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45289 = cause_type;
var G__45290 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45291 = loc;
var G__45292 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45288,G__45289,G__45290,G__45291,G__45292) : format.call(null,G__45288,G__45289,G__45290,G__45291,G__45292));

break;
case "compilation":
var G__45293 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45294 = cause_type;
var G__45295 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45296 = loc;
var G__45297 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45293,G__45294,G__45295,G__45296,G__45297) : format.call(null,G__45293,G__45294,G__45295,G__45296,G__45297));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45298 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45299 = symbol;
var G__45300 = loc;
var G__45301 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45302_45404 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45303_45405 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45304_45406 = true;
var _STAR_print_fn_STAR__temp_val__45305_45407 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45304_45406);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45305_45407);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45267_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45267_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45303_45405);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45302_45404);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45298,G__45299,G__45300,G__45301) : format.call(null,G__45298,G__45299,G__45300,G__45301));
} else {
var G__45307 = "Execution error%s at %s(%s).\n%s\n";
var G__45308 = cause_type;
var G__45309 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45310 = loc;
var G__45311 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45307,G__45308,G__45309,G__45310,G__45311) : format.call(null,G__45307,G__45308,G__45309,G__45310,G__45311));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45272__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map