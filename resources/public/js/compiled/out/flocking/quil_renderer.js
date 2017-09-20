// Compiled by ClojureScript 1.9.908 {}
goog.provide('flocking.quil_renderer');
goog.require('cljs.core');
goog.require('quil.core');
flocking.quil_renderer.debug_wander = (function flocking$quil_renderer$debug_wander(p__40283){
var map__40284 = p__40283;
var map__40284__$1 = ((((!((map__40284 == null)))?((((map__40284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40284):map__40284);
var map__40285 = cljs.core.get.call(null,map__40284__$1,new cljs.core.Keyword(null,"behaviors","behaviors",120724909));
var map__40285__$1 = ((((!((map__40285 == null)))?((((map__40285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40285):map__40285);
var map__40286 = cljs.core.get.call(null,map__40285__$1,new cljs.core.Keyword(null,"wander","wander",1245626610));
var map__40286__$1 = ((((!((map__40286 == null)))?((((map__40286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40286):map__40286);
var direction = cljs.core.get.call(null,map__40286__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var strength = cljs.core.get.call(null,map__40286__$1,new cljs.core.Keyword(null,"strength","strength",-415606478));
var rate = cljs.core.get.call(null,map__40286__$1,new cljs.core.Keyword(null,"rate","rate",-1428659698));
var debug = cljs.core.get.call(null,map__40286__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
if(cljs.core.truth_(debug)){
quil.core.fill.call(null,(255));

quil.core.stroke.call(null,(255));

quil.core.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((1) * Math.sqrt(2.0)),(0)], null));

var tr__37862__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((1) * Math.sqrt(2.0)),(0)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__37862__auto__);

quil.core.no_fill.call(null);

quil.core.stroke.call(null,(0),(255),(255));

quil.core.ellipse.call(null,(0),(0),(2),(2));

var tr__37868__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [direction], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__37868__auto__);

quil.core.stroke.call(null,(255),(255),(0));

quil.core.begin_shape.call(null);

cljs.core.apply.call(null,quil.core.vertex,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));

cljs.core.apply.call(null,quil.core.vertex,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [strength,(0)], null));

quil.core.end_shape.call(null);

var tr__37862__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [strength,(0)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__37862__auto____$1);

quil.core.stroke.call(null,(255),(0),(0));

return quil.core.ellipse.call(null,(0),(0),((2) * rate),((2) * rate));
}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}} else {
return null;
}
});
flocking.quil_renderer.draw_boid = (function flocking$quil_renderer$draw_boid(p__40290){
var map__40291 = p__40290;
var map__40291__$1 = ((((!((map__40291 == null)))?((((map__40291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40291):map__40291);
var boid = map__40291__$1;
var vec__40292 = cljs.core.get.call(null,map__40291__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var pos = cljs.core.nth.call(null,vec__40292,(0),null);
var vec__40295 = cljs.core.nth.call(null,vec__40292,(1),null);
var vx = cljs.core.nth.call(null,vec__40295,(0),null);
var vy = cljs.core.nth.call(null,vec__40295,(1),null);
var width = cljs.core.get.call(null,map__40291__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__40291__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var color = cljs.core.get.call(null,map__40291__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var tw = (0.5 * width);
var th = (0.5 * height);
var tr__37862__auto__ = pos;
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__37862__auto__);

var tr__37868__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.atan2(vy,vx)], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__37868__auto__);

flocking.quil_renderer.debug_wander.call(null,boid);

var tr__37868__auto____$1 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.radians.call(null,(-90))], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__37868__auto____$1);

quil.core.no_fill.call(null);

cljs.core.apply.call(null,quil.core.stroke,color);

return quil.core.triangle.call(null,(- tw),(- th),(0),th,tw,(- th));
}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}});
flocking.quil_renderer.draw = (function flocking$quil_renderer$draw(p__40299){
var map__40300 = p__40299;
var map__40300__$1 = ((((!((map__40300 == null)))?((((map__40300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40300):map__40300);
var world = cljs.core.get.call(null,map__40300__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var boids = cljs.core.get.call(null,map__40300__$1,new cljs.core.Keyword(null,"boids","boids",2106521410));
var map__40302 = world;
var map__40302__$1 = ((((!((map__40302 == null)))?((((map__40302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40302):map__40302);
var minx = cljs.core.get.call(null,map__40302__$1,new cljs.core.Keyword(null,"minx","minx",1094774569));
var maxx = cljs.core.get.call(null,map__40302__$1,new cljs.core.Keyword(null,"maxx","maxx",23572233));
var miny = cljs.core.get.call(null,map__40302__$1,new cljs.core.Keyword(null,"miny","miny",-1513078883));
var maxy = cljs.core.get.call(null,map__40302__$1,new cljs.core.Keyword(null,"maxy","maxy",726027898));
var dx = (maxx - minx);
var dy = (maxy - miny);
var max_world_dim = (function (){var x__30399__auto__ = dx;
var y__30400__auto__ = dy;
return ((x__30399__auto__ > y__30400__auto__) ? x__30399__auto__ : y__30400__auto__);
})();
var w = quil.core.width.call(null);
var h = quil.core.height.call(null);
var min_screen_dim = (function (){var x__30406__auto__ = w;
var y__30407__auto__ = h;
return ((x__30406__auto__ < y__30407__auto__) ? x__30406__auto__ : y__30407__auto__);
})();
quil.core.background.call(null,(0),(0),(0));

quil.core.translate.call(null,(0.5 * w),(0.5 * h));

quil.core.scale.call(null,(1),(-1));

quil.core.scale.call(null,(min_screen_dim / max_world_dim));

quil.core.stroke_weight.call(null,((max_world_dim / min_screen_dim) / 0.5));

var seq__40304 = cljs.core.seq.call(null,boids);
var chunk__40305 = null;
var count__40306 = (0);
var i__40307 = (0);
while(true){
if((i__40307 < count__40306)){
var boid = cljs.core._nth.call(null,chunk__40305,i__40307);
flocking.quil_renderer.draw_boid.call(null,boid);

var G__40308 = seq__40304;
var G__40309 = chunk__40305;
var G__40310 = count__40306;
var G__40311 = (i__40307 + (1));
seq__40304 = G__40308;
chunk__40305 = G__40309;
count__40306 = G__40310;
i__40307 = G__40311;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq.call(null,seq__40304);
if(temp__5459__auto__){
var seq__40304__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40304__$1)){
var c__30978__auto__ = cljs.core.chunk_first.call(null,seq__40304__$1);
var G__40312 = cljs.core.chunk_rest.call(null,seq__40304__$1);
var G__40313 = c__30978__auto__;
var G__40314 = cljs.core.count.call(null,c__30978__auto__);
var G__40315 = (0);
seq__40304 = G__40312;
chunk__40305 = G__40313;
count__40306 = G__40314;
i__40307 = G__40315;
continue;
} else {
var boid = cljs.core.first.call(null,seq__40304__$1);
flocking.quil_renderer.draw_boid.call(null,boid);

var G__40316 = cljs.core.next.call(null,seq__40304__$1);
var G__40317 = null;
var G__40318 = (0);
var G__40319 = (0);
seq__40304 = G__40316;
chunk__40305 = G__40317;
count__40306 = G__40318;
i__40307 = G__40319;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=quil_renderer.js.map?rel=1505885199864
