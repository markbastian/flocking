// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45435){
var map__45436 = p__45435;
var map__45436__$1 = ((((!((map__45436 == null)))?((((map__45436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45436):map__45436);
var m = map__45436__$1;
var n = cljs.core.get.call(null,map__45436__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__45436__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5459__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5459__auto__)){
var ns = temp__5459__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45438_45460 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45439_45461 = null;
var count__45440_45462 = (0);
var i__45441_45463 = (0);
while(true){
if((i__45441_45463 < count__45440_45462)){
var f_45464 = cljs.core._nth.call(null,chunk__45439_45461,i__45441_45463);
cljs.core.println.call(null,"  ",f_45464);

var G__45465 = seq__45438_45460;
var G__45466 = chunk__45439_45461;
var G__45467 = count__45440_45462;
var G__45468 = (i__45441_45463 + (1));
seq__45438_45460 = G__45465;
chunk__45439_45461 = G__45466;
count__45440_45462 = G__45467;
i__45441_45463 = G__45468;
continue;
} else {
var temp__5459__auto___45469 = cljs.core.seq.call(null,seq__45438_45460);
if(temp__5459__auto___45469){
var seq__45438_45470__$1 = temp__5459__auto___45469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45438_45470__$1)){
var c__30978__auto___45471 = cljs.core.chunk_first.call(null,seq__45438_45470__$1);
var G__45472 = cljs.core.chunk_rest.call(null,seq__45438_45470__$1);
var G__45473 = c__30978__auto___45471;
var G__45474 = cljs.core.count.call(null,c__30978__auto___45471);
var G__45475 = (0);
seq__45438_45460 = G__45472;
chunk__45439_45461 = G__45473;
count__45440_45462 = G__45474;
i__45441_45463 = G__45475;
continue;
} else {
var f_45476 = cljs.core.first.call(null,seq__45438_45470__$1);
cljs.core.println.call(null,"  ",f_45476);

var G__45477 = cljs.core.next.call(null,seq__45438_45470__$1);
var G__45478 = null;
var G__45479 = (0);
var G__45480 = (0);
seq__45438_45460 = G__45477;
chunk__45439_45461 = G__45478;
count__45440_45462 = G__45479;
i__45441_45463 = G__45480;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45481 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30047__auto__)){
return or__30047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_45481);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_45481)))?cljs.core.second.call(null,arglists_45481):arglists_45481));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45442_45482 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45443_45483 = null;
var count__45444_45484 = (0);
var i__45445_45485 = (0);
while(true){
if((i__45445_45485 < count__45444_45484)){
var vec__45446_45486 = cljs.core._nth.call(null,chunk__45443_45483,i__45445_45485);
var name_45487 = cljs.core.nth.call(null,vec__45446_45486,(0),null);
var map__45449_45488 = cljs.core.nth.call(null,vec__45446_45486,(1),null);
var map__45449_45489__$1 = ((((!((map__45449_45488 == null)))?((((map__45449_45488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45449_45488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45449_45488):map__45449_45488);
var doc_45490 = cljs.core.get.call(null,map__45449_45489__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45491 = cljs.core.get.call(null,map__45449_45489__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_45487);

cljs.core.println.call(null," ",arglists_45491);

if(cljs.core.truth_(doc_45490)){
cljs.core.println.call(null," ",doc_45490);
} else {
}

var G__45492 = seq__45442_45482;
var G__45493 = chunk__45443_45483;
var G__45494 = count__45444_45484;
var G__45495 = (i__45445_45485 + (1));
seq__45442_45482 = G__45492;
chunk__45443_45483 = G__45493;
count__45444_45484 = G__45494;
i__45445_45485 = G__45495;
continue;
} else {
var temp__5459__auto___45496 = cljs.core.seq.call(null,seq__45442_45482);
if(temp__5459__auto___45496){
var seq__45442_45497__$1 = temp__5459__auto___45496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45442_45497__$1)){
var c__30978__auto___45498 = cljs.core.chunk_first.call(null,seq__45442_45497__$1);
var G__45499 = cljs.core.chunk_rest.call(null,seq__45442_45497__$1);
var G__45500 = c__30978__auto___45498;
var G__45501 = cljs.core.count.call(null,c__30978__auto___45498);
var G__45502 = (0);
seq__45442_45482 = G__45499;
chunk__45443_45483 = G__45500;
count__45444_45484 = G__45501;
i__45445_45485 = G__45502;
continue;
} else {
var vec__45451_45503 = cljs.core.first.call(null,seq__45442_45497__$1);
var name_45504 = cljs.core.nth.call(null,vec__45451_45503,(0),null);
var map__45454_45505 = cljs.core.nth.call(null,vec__45451_45503,(1),null);
var map__45454_45506__$1 = ((((!((map__45454_45505 == null)))?((((map__45454_45505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45454_45505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45454_45505):map__45454_45505);
var doc_45507 = cljs.core.get.call(null,map__45454_45506__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45508 = cljs.core.get.call(null,map__45454_45506__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_45504);

cljs.core.println.call(null," ",arglists_45508);

if(cljs.core.truth_(doc_45507)){
cljs.core.println.call(null," ",doc_45507);
} else {
}

var G__45509 = cljs.core.next.call(null,seq__45442_45497__$1);
var G__45510 = null;
var G__45511 = (0);
var G__45512 = (0);
seq__45442_45482 = G__45509;
chunk__45443_45483 = G__45510;
count__45444_45484 = G__45511;
i__45445_45485 = G__45512;
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
var temp__5459__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5459__auto__)){
var fnspec = temp__5459__auto__;
cljs.core.print.call(null,"Spec");

var seq__45456 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45457 = null;
var count__45458 = (0);
var i__45459 = (0);
while(true){
if((i__45459 < count__45458)){
var role = cljs.core._nth.call(null,chunk__45457,i__45459);
var temp__5459__auto___45513__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5459__auto___45513__$1)){
var spec_45514 = temp__5459__auto___45513__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_45514));
} else {
}

var G__45515 = seq__45456;
var G__45516 = chunk__45457;
var G__45517 = count__45458;
var G__45518 = (i__45459 + (1));
seq__45456 = G__45515;
chunk__45457 = G__45516;
count__45458 = G__45517;
i__45459 = G__45518;
continue;
} else {
var temp__5459__auto____$1 = cljs.core.seq.call(null,seq__45456);
if(temp__5459__auto____$1){
var seq__45456__$1 = temp__5459__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45456__$1)){
var c__30978__auto__ = cljs.core.chunk_first.call(null,seq__45456__$1);
var G__45519 = cljs.core.chunk_rest.call(null,seq__45456__$1);
var G__45520 = c__30978__auto__;
var G__45521 = cljs.core.count.call(null,c__30978__auto__);
var G__45522 = (0);
seq__45456 = G__45519;
chunk__45457 = G__45520;
count__45458 = G__45521;
i__45459 = G__45522;
continue;
} else {
var role = cljs.core.first.call(null,seq__45456__$1);
var temp__5459__auto___45523__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5459__auto___45523__$2)){
var spec_45524 = temp__5459__auto___45523__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_45524));
} else {
}

var G__45525 = cljs.core.next.call(null,seq__45456__$1);
var G__45526 = null;
var G__45527 = (0);
var G__45528 = (0);
seq__45456 = G__45525;
chunk__45457 = G__45526;
count__45458 = G__45527;
i__45459 = G__45528;
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

//# sourceMappingURL=repl.js.map?rel=1505885206036
