// Compiled by ClojureScript 1.9.908 {}
goog.provide('flocking.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('flocking.game_launcher');
goog.require('flocking.rules');
goog.require('flocking.simulation');
cljs.core.enable_console_print_BANG_.call(null);
flocking.core.with_rotation = (function flocking$core$with_rotation(){
return null;
});
flocking.core.triangle = (function flocking$core$triangle(x0,y0,x1,y1,x2,y2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,y0,x1,y1,x2,y2], null),new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(100,100) rotate(45)"].join(''),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null);
});
flocking.core.render = (function flocking$core$render(state){
var map__47851 = cljs.core.deref.call(null,state);
var map__47851__$1 = ((((!((map__47851 == null)))?((((map__47851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47851):map__47851);
var world = cljs.core.get.call(null,map__47851__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var boids = cljs.core.get.call(null,map__47851__$1,new cljs.core.Keyword(null,"boids","boids",2106521410));
var food = cljs.core.get.call(null,map__47851__$1,new cljs.core.Keyword(null,"food","food",1842183121));
var time = cljs.core.get.call(null,map__47851__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 0px 0px 0px"], null),new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"height","height",1025178622),(400)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"black","black",1294279647)], null)], null),(function (){var iter__30929__auto__ = ((function (map__47851,map__47851__$1,world,boids,food,time){
return (function flocking$core$render_$_iter__47853(s__47854){
return (new cljs.core.LazySeq(null,((function (map__47851,map__47851__$1,world,boids,food,time){
return (function (){
var s__47854__$1 = s__47854;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__47854__$1);
if(temp__5459__auto__){
var s__47854__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47854__$2)){
var c__30927__auto__ = cljs.core.chunk_first.call(null,s__47854__$2);
var size__30928__auto__ = cljs.core.count.call(null,c__30927__auto__);
var b__47856 = cljs.core.chunk_buffer.call(null,size__30928__auto__);
if((function (){var i__47855 = (0);
while(true){
if((i__47855 < size__30928__auto__)){
var map__47857 = cljs.core._nth.call(null,c__30927__auto__,i__47855);
var map__47857__$1 = ((((!((map__47857 == null)))?((((map__47857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47857.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47857):map__47857);
var vec__47858 = cljs.core.get.call(null,map__47857__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var vec__47861 = cljs.core.nth.call(null,vec__47858,(0),null);
var px = cljs.core.nth.call(null,vec__47861,(0),null);
var py = cljs.core.nth.call(null,vec__47861,(1),null);
var vec__47864 = cljs.core.nth.call(null,vec__47858,(1),null);
var vx = cljs.core.nth.call(null,vec__47864,(0),null);
var vy = cljs.core.nth.call(null,vec__47864,(1),null);
var r = Math.atan2(vy,vx);
cljs.core.chunk_append.call(null,b__47856,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),["boid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(px),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(py)].join(''),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-5),(-5),(5),(-5),(0),(10)], null),new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((px * (10)) + (200))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((py * (10)) + (200))),") rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((270) + ((r * (180)) / 3.14))),")"].join(''),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null));

var G__47879 = (i__47855 + (1));
i__47855 = G__47879;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47856),flocking$core$render_$_iter__47853.call(null,cljs.core.chunk_rest.call(null,s__47854__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47856),null);
}
} else {
var map__47868 = cljs.core.first.call(null,s__47854__$2);
var map__47868__$1 = ((((!((map__47868 == null)))?((((map__47868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47868):map__47868);
var vec__47869 = cljs.core.get.call(null,map__47868__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var vec__47872 = cljs.core.nth.call(null,vec__47869,(0),null);
var px = cljs.core.nth.call(null,vec__47872,(0),null);
var py = cljs.core.nth.call(null,vec__47872,(1),null);
var vec__47875 = cljs.core.nth.call(null,vec__47869,(1),null);
var vx = cljs.core.nth.call(null,vec__47875,(0),null);
var vy = cljs.core.nth.call(null,vec__47875,(1),null);
var r = Math.atan2(vy,vx);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),["boid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(px),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(py)].join(''),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-5),(-5),(5),(-5),(0),(10)], null),new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((px * (10)) + (200))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((py * (10)) + (200))),") rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((270) + ((r * (180)) / 3.14))),")"].join(''),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),flocking$core$render_$_iter__47853.call(null,cljs.core.rest.call(null,s__47854__$2)));
}
} else {
return null;
}
break;
}
});})(map__47851,map__47851__$1,world,boids,food,time))
,null,null));
});})(map__47851,map__47851__$1,world,boids,food,time))
;
return iter__30929__auto__.call(null,boids);
})()], null)], null);
});
var temp__5459__auto___47880 = document.getElementById("app");
if(cljs.core.truth_(temp__5459__auto___47880)){
var app_context_47881 = temp__5459__auto___47880;
var state_47882 = reagent.core.atom.call(null,flocking.rules.initial_state.call(null,(20),(20)));
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flocking.core.render,state_47882], null),(function (){
window.onkeydown = ((function (state_47882,app_context_47881,temp__5459__auto___47880){
return (function (e){
if(cljs.core.truth_((function (){var and__30035__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(39),null,(32),null,(40),null,(38),null,(37),null], null), null).call(null,e.keyCode);
if(cljs.core.truth_(and__30035__auto__)){
return cljs.core._EQ_.call(null,e.target,document.body);
} else {
return and__30035__auto__;
}
})())){
return e.preventDefault();
} else {
return null;
}
});})(state_47882,app_context_47881,temp__5459__auto___47880))
;

setInterval(((function (state_47882,app_context_47881,temp__5459__auto___47880){
return (function (){
return cljs.core.swap_BANG_.call(null,state_47882,flocking.simulation.sim);
});})(state_47882,app_context_47881,temp__5459__auto___47880))
,(33));

return app_context_47881;
})()
);
} else {
}
flocking.core.on_js_reload = (function flocking$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1505886316776
