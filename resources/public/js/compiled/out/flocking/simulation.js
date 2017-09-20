// Compiled by ClojureScript 1.9.908 {}
goog.provide('flocking.simulation');
goog.require('cljs.core');
goog.require('flocking.rules');
goog.require('vecmath.vec');
flocking.simulation.w = (function flocking$simulation$w(v,lo,hi){
var delta = (hi - lo);
var x = v;
while(true){
if((x < lo)){
var G__41130 = (x + delta);
x = G__41130;
continue;
} else {
if((x >= hi)){
var G__41131 = (x - delta);
x = G__41131;
continue;
} else {
return x;

}
}
break;
}
});
flocking.simulation.wrap = (function flocking$simulation$wrap(state,p__41134){
var map__41135 = p__41134;
var map__41135__$1 = ((((!((map__41135 == null)))?((((map__41135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41135.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41135):map__41135);
var minx = cljs.core.get.call(null,map__41135__$1,new cljs.core.Keyword(null,"minx","minx",1094774569));
var maxx = cljs.core.get.call(null,map__41135__$1,new cljs.core.Keyword(null,"maxx","maxx",23572233));
var miny = cljs.core.get.call(null,map__41135__$1,new cljs.core.Keyword(null,"miny","miny",-1513078883));
var maxy = cljs.core.get.call(null,map__41135__$1,new cljs.core.Keyword(null,"maxy","maxy",726027898));
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),(0),(0)], null),((function (map__41135,map__41135__$1,minx,maxx,miny,maxy){
return (function (p1__41132_SHARP_){
return flocking.simulation.w.call(null,p1__41132_SHARP_,minx,maxx);
});})(map__41135,map__41135__$1,minx,maxx,miny,maxy))
),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),(0),(1)], null),((function (map__41135,map__41135__$1,minx,maxx,miny,maxy){
return (function (p1__41133_SHARP_){
return flocking.simulation.w.call(null,p1__41133_SHARP_,miny,maxy);
});})(map__41135,map__41135__$1,minx,maxx,miny,maxy))
);
});
if(typeof flocking.simulation.steer !== 'undefined'){
} else {
flocking.simulation.steer = (function (){var method_table__31100__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31101__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31102__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31103__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31104__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"flocking.simulation","steer"),((function (method_table__31100__auto__,prefer_table__31101__auto__,method_cache__31102__auto__,cached_hierarchy__31103__auto__,hierarchy__31104__auto__){
return (function (behavior_name,_,___$1,___$2){
return behavior_name;
});})(method_table__31100__auto__,prefer_table__31101__auto__,method_cache__31102__auto__,cached_hierarchy__31103__auto__,hierarchy__31104__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31104__auto__,method_table__31100__auto__,prefer_table__31101__auto__,method_cache__31102__auto__,cached_hierarchy__31103__auto__));
})();
}
cljs.core._add_method.call(null,flocking.simulation.steer,new cljs.core.Keyword(null,"wander","wander",1245626610),(function (_,behavior,boid,flock){
return flocking.rules.wander.call(null,behavior,boid,flock);
}));
cljs.core._add_method.call(null,flocking.simulation.steer,new cljs.core.Keyword(null,"separate","separate",-1624828409),(function (_,behavior,boid,flock){
return flocking.rules.separate.call(null,behavior,boid,flock);
}));
cljs.core._add_method.call(null,flocking.simulation.steer,new cljs.core.Keyword(null,"align","align",1964212802),(function (_,behavior,boid,flock){
return flocking.rules.align.call(null,behavior,boid,flock);
}));
cljs.core._add_method.call(null,flocking.simulation.steer,new cljs.core.Keyword(null,"cohere","cohere",1678799519),(function (_,behavior,boid,flock){
return flocking.rules.cohere.call(null,behavior,boid,flock);
}));
flocking.simulation.sim_boid = (function flocking$simulation$sim_boid(p__41139,world_state,dt){
var map__41140 = p__41139;
var map__41140__$1 = ((((!((map__41140 == null)))?((((map__41140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41140):map__41140);
var boid = map__41140__$1;
var state = cljs.core.get.call(null,map__41140__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var max_speed = cljs.core.get.call(null,map__41140__$1,new cljs.core.Keyword(null,"max-speed","max-speed",-997417461));
var behaviors = cljs.core.get.call(null,map__41140__$1,new cljs.core.Keyword(null,"behaviors","behaviors",120724909));
var vec__41142 = state;
var pos = cljs.core.nth.call(null,vec__41142,(0),null);
var vel = cljs.core.nth.call(null,vec__41142,(1),null);
var forces = (function (){var iter__30929__auto__ = ((function (vec__41142,pos,vel,map__41140,map__41140__$1,boid,state,max_speed,behaviors){
return (function flocking$simulation$sim_boid_$_iter__41145(s__41146){
return (new cljs.core.LazySeq(null,((function (vec__41142,pos,vel,map__41140,map__41140__$1,boid,state,max_speed,behaviors){
return (function (){
var s__41146__$1 = s__41146;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__41146__$1);
if(temp__5459__auto__){
var s__41146__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41146__$2)){
var c__30927__auto__ = cljs.core.chunk_first.call(null,s__41146__$2);
var size__30928__auto__ = cljs.core.count.call(null,c__30927__auto__);
var b__41148 = cljs.core.chunk_buffer.call(null,size__30928__auto__);
if((function (){var i__41147 = (0);
while(true){
if((i__41147 < size__30928__auto__)){
var vec__41149 = cljs.core._nth.call(null,c__30927__auto__,i__41147);
var b = cljs.core.nth.call(null,vec__41149,(0),null);
var behavior = cljs.core.nth.call(null,vec__41149,(1),null);
cljs.core.chunk_append.call(null,b__41148,flocking.simulation.steer.call(null,b,behavior,boid,world_state));

var G__41155 = (i__41147 + (1));
i__41147 = G__41155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41148),flocking$simulation$sim_boid_$_iter__41145.call(null,cljs.core.chunk_rest.call(null,s__41146__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41148),null);
}
} else {
var vec__41152 = cljs.core.first.call(null,s__41146__$2);
var b = cljs.core.nth.call(null,vec__41152,(0),null);
var behavior = cljs.core.nth.call(null,vec__41152,(1),null);
return cljs.core.cons.call(null,flocking.simulation.steer.call(null,b,behavior,boid,world_state),flocking$simulation$sim_boid_$_iter__41145.call(null,cljs.core.rest.call(null,s__41146__$2)));
}
} else {
return null;
}
break;
}
});})(vec__41142,pos,vel,map__41140,map__41140__$1,boid,state,max_speed,behaviors))
,null,null));
});})(vec__41142,pos,vel,map__41140,map__41140__$1,boid,state,max_speed,behaviors))
;
return iter__30929__auto__.call(null,behaviors);
})();
var vprime = vecmath.vec.add.call(null,vel,cljs.core.map.call(null,((function (vec__41142,pos,vel,forces,map__41140,map__41140__$1,boid,state,max_speed,behaviors){
return (function (p1__41137_SHARP_){
return (p1__41137_SHARP_ * dt);
});})(vec__41142,pos,vel,forces,map__41140,map__41140__$1,boid,state,max_speed,behaviors))
,cljs.core.apply.call(null,cljs.core.map,cljs.core._PLUS_,forces)));
var vmag = vecmath.vec.mag.call(null,vprime);
var vp = (((vmag === (0)))?vel:cljs.core.map.call(null,((function (vec__41142,pos,vel,forces,vprime,vmag,map__41140,map__41140__$1,boid,state,max_speed,behaviors){
return (function (p1__41138_SHARP_){
return (max_speed * (p1__41138_SHARP_ / vmag));
});})(vec__41142,pos,vel,forces,vprime,vmag,map__41140,map__41140__$1,boid,state,max_speed,behaviors))
,vprime));
var new_states = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vecmath.vec.add.call(null,pos,vecmath.vec.scale.call(null,vp,dt)),vp], null);
return flocking.simulation.wrap.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,boid,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null),new_states),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"behaviors","behaviors",120724909),new cljs.core.Keyword(null,"wander","wander",1245626610)], null),flocking.rules.update_wander),new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(world_state));
});
flocking.simulation.averages = (function flocking$simulation$averages(p__41158){
var map__41159 = p__41158;
var map__41159__$1 = ((((!((map__41159 == null)))?((((map__41159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41159):map__41159);
var state = map__41159__$1;
var boids = cljs.core.get.call(null,map__41159__$1,new cljs.core.Keyword(null,"boids","boids",2106521410));
return cljs.core.into.call(null,state,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"average-position","average-position",850828623),new cljs.core.Keyword(null,"average-velocity","average-velocity",-494376681)], null),cljs.core.map.call(null,((function (map__41159,map__41159__$1,state,boids){
return (function (p1__41157_SHARP_){
return vecmath.vec.scale.call(null,p1__41157_SHARP_,(1.0 / cljs.core.count.call(null,boids)));
});})(map__41159,map__41159__$1,state,boids))
,cljs.core.map.call(null,((function (map__41159,map__41159__$1,state,boids){
return (function (p1__41156_SHARP_){
return cljs.core.apply.call(null,cljs.core.map,cljs.core._PLUS_,p1__41156_SHARP_);
});})(map__41159,map__41159__$1,state,boids))
,cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.map.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),boids))))));
});
flocking.simulation.sim = (function flocking$simulation$sim(state){
var t = (new Date()).getTime();
var dt = ((t - state.call(null,new cljs.core.Keyword(null,"time","time",1385887882),t)) * 0.001);
var new_boids = (function (){var iter__30929__auto__ = ((function (t,dt){
return (function flocking$simulation$sim_$_iter__41161(s__41162){
return (new cljs.core.LazySeq(null,((function (t,dt){
return (function (){
var s__41162__$1 = s__41162;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__41162__$1);
if(temp__5459__auto__){
var s__41162__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41162__$2)){
var c__30927__auto__ = cljs.core.chunk_first.call(null,s__41162__$2);
var size__30928__auto__ = cljs.core.count.call(null,c__30927__auto__);
var b__41164 = cljs.core.chunk_buffer.call(null,size__30928__auto__);
if((function (){var i__41163 = (0);
while(true){
if((i__41163 < size__30928__auto__)){
var boid = cljs.core._nth.call(null,c__30927__auto__,i__41163);
cljs.core.chunk_append.call(null,b__41164,flocking.simulation.sim_boid.call(null,boid,state,dt));

var G__41165 = (i__41163 + (1));
i__41163 = G__41165;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41164),flocking$simulation$sim_$_iter__41161.call(null,cljs.core.chunk_rest.call(null,s__41162__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41164),null);
}
} else {
var boid = cljs.core.first.call(null,s__41162__$2);
return cljs.core.cons.call(null,flocking.simulation.sim_boid.call(null,boid,state,dt),flocking$simulation$sim_$_iter__41161.call(null,cljs.core.rest.call(null,s__41162__$2)));
}
} else {
return null;
}
break;
}
});})(t,dt))
,null,null));
});})(t,dt))
;
return iter__30929__auto__.call(null,new cljs.core.Keyword(null,"boids","boids",2106521410).cljs$core$IFn$_invoke$arity$1(state));
})();
return flocking.simulation.averages.call(null,cljs.core.into.call(null,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"boids","boids",2106521410),new_boids], null)));
});

//# sourceMappingURL=simulation.js.map?rel=1505885201612
