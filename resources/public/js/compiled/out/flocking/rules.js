// Compiled by ClojureScript 1.9.908 {}
goog.provide('flocking.rules');
goog.require('cljs.core');
goog.require('vecmath.vec');
flocking.rules.update_wander = (function flocking$rules$update_wander(p__41061){
var map__41062 = p__41061;
var map__41062__$1 = ((((!((map__41062 == null)))?((((map__41062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41062):map__41062);
var s = map__41062__$1;
var rate = cljs.core.get.call(null,map__41062__$1,new cljs.core.Keyword(null,"rate","rate",-1428659698));
return cljs.core.update.call(null,s,new cljs.core.Keyword(null,"direction","direction",-633359395),((function (map__41062,map__41062__$1,s,rate){
return (function (p1__41060_SHARP_){
return (p1__41060_SHARP_ + ((cljs.core.rand.call(null) - 0.5) * rate));
});})(map__41062,map__41062__$1,s,rate))
);
});
flocking.rules.tovec = (function flocking$rules$tovec(m,d){
return cljs.core.juxt.call(null,(function (p1__41064_SHARP_){
return (m * Math.cos(p1__41064_SHARP_));
}),(function (p1__41065_SHARP_){
return (m * Math.sin(p1__41065_SHARP_));
})).call(null,d);
});
flocking.rules.wander = (function flocking$rules$wander(p__41067,p__41068,_){
var map__41069 = p__41067;
var map__41069__$1 = ((((!((map__41069 == null)))?((((map__41069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41069.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41069):map__41069);
var direction = cljs.core.get.call(null,map__41069__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var strength = cljs.core.get.call(null,map__41069__$1,new cljs.core.Keyword(null,"strength","strength",-415606478));
var map__41070 = p__41068;
var map__41070__$1 = ((((!((map__41070 == null)))?((((map__41070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41070):map__41070);
var state = cljs.core.get.call(null,map__41070__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var velocity = state.call(null,(1));
var m = vecmath.vec.mag.call(null,velocity);
var f = (((m === (0)))?velocity:cljs.core.map.call(null,((function (velocity,m,map__41069,map__41069__$1,direction,strength,map__41070,map__41070__$1,state){
return (function (p1__41066_SHARP_){
return (Math.sqrt(2.0) * (p1__41066_SHARP_ / m));
});})(velocity,m,map__41069,map__41069__$1,direction,strength,map__41070,map__41070__$1,state))
,velocity));
var w = flocking.rules.tovec.call(null,strength,direction);
return vecmath.vec.add.call(null,f,w);
});
flocking.rules.separate = (function flocking$rules$separate(p__41073,p__41074,p__41075){
var map__41076 = p__41073;
var map__41076__$1 = ((((!((map__41076 == null)))?((((map__41076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41076):map__41076);
var range = cljs.core.get.call(null,map__41076__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var strength = cljs.core.get.call(null,map__41076__$1,new cljs.core.Keyword(null,"strength","strength",-415606478));
var map__41077 = p__41074;
var map__41077__$1 = ((((!((map__41077 == null)))?((((map__41077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41077):map__41077);
var state = cljs.core.get.call(null,map__41077__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__41078 = p__41075;
var map__41078__$1 = ((((!((map__41078 == null)))?((((map__41078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41078):map__41078);
var boids = cljs.core.get.call(null,map__41078__$1,new cljs.core.Keyword(null,"boids","boids",2106521410));
var nearby = (function (){var iter__30929__auto__ = ((function (map__41076,map__41076__$1,range,strength,map__41077,map__41077__$1,state,map__41078,map__41078__$1,boids){
return (function flocking$rules$separate_$_iter__41082(s__41083){
return (new cljs.core.LazySeq(null,((function (map__41076,map__41076__$1,range,strength,map__41077,map__41077__$1,state,map__41078,map__41078__$1,boids){
return (function (){
var s__41083__$1 = s__41083;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__41083__$1);
if(temp__5459__auto__){
var s__41083__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41083__$2)){
var c__30927__auto__ = cljs.core.chunk_first.call(null,s__41083__$2);
var size__30928__auto__ = cljs.core.count.call(null,c__30927__auto__);
var b__41085 = cljs.core.chunk_buffer.call(null,size__30928__auto__);
if((function (){var i__41084 = (0);
while(true){
if((i__41084 < size__30928__auto__)){
var map__41086 = cljs.core._nth.call(null,c__30927__auto__,i__41084);
var map__41086__$1 = ((((!((map__41086 == null)))?((((map__41086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41086):map__41086);
var vec__41087 = cljs.core.get.call(null,map__41086__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var p = cljs.core.nth.call(null,vec__41087,(0),null);
var dp = vecmath.vec.sub.call(null,state.call(null,(0)),p);
var m = vecmath.vec.mag.call(null,dp);
if((((0) <= m)) && ((m <= range))){
cljs.core.chunk_append.call(null,b__41085,(((m === (0)))?state.call(null,(0)):vecmath.vec.scale.call(null,dp,((strength / m) / m))));

var G__41096 = (i__41084 + (1));
i__41084 = G__41096;
continue;
} else {
var G__41097 = (i__41084 + (1));
i__41084 = G__41097;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41085),flocking$rules$separate_$_iter__41082.call(null,cljs.core.chunk_rest.call(null,s__41083__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41085),null);
}
} else {
var map__41091 = cljs.core.first.call(null,s__41083__$2);
var map__41091__$1 = ((((!((map__41091 == null)))?((((map__41091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41091):map__41091);
var vec__41092 = cljs.core.get.call(null,map__41091__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var p = cljs.core.nth.call(null,vec__41092,(0),null);
var dp = vecmath.vec.sub.call(null,state.call(null,(0)),p);
var m = vecmath.vec.mag.call(null,dp);
if((((0) <= m)) && ((m <= range))){
return cljs.core.cons.call(null,(((m === (0)))?state.call(null,(0)):vecmath.vec.scale.call(null,dp,((strength / m) / m))),flocking$rules$separate_$_iter__41082.call(null,cljs.core.rest.call(null,s__41083__$2)));
} else {
var G__41098 = cljs.core.rest.call(null,s__41083__$2);
s__41083__$1 = G__41098;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__41076,map__41076__$1,range,strength,map__41077,map__41077__$1,state,map__41078,map__41078__$1,boids))
,null,null));
});})(map__41076,map__41076__$1,range,strength,map__41077,map__41077__$1,state,map__41078,map__41078__$1,boids))
;
return iter__30929__auto__.call(null,boids);
})();
return cljs.core.apply.call(null,cljs.core.mapv,cljs.core._PLUS_,nearby);
});
flocking.rules.weighted_vec = (function flocking$rules$weighted_vec(vec,strength,average_vec){
var dv = vecmath.vec.sub.call(null,average_vec,vec);
var mag = vecmath.vec.mag.call(null,dv);
if((mag === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return vecmath.vec.scale.call(null,dv,(strength / mag));
}
});
flocking.rules.align = (function flocking$rules$align(p__41099,p__41100,p__41101){
var map__41102 = p__41099;
var map__41102__$1 = ((((!((map__41102 == null)))?((((map__41102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41102):map__41102);
var strength = cljs.core.get.call(null,map__41102__$1,new cljs.core.Keyword(null,"strength","strength",-415606478));
var map__41103 = p__41100;
var map__41103__$1 = ((((!((map__41103 == null)))?((((map__41103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41103):map__41103);
var state = cljs.core.get.call(null,map__41103__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__41104 = p__41101;
var map__41104__$1 = ((((!((map__41104 == null)))?((((map__41104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41104.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41104):map__41104);
var average_velocity = cljs.core.get.call(null,map__41104__$1,new cljs.core.Keyword(null,"average-velocity","average-velocity",-494376681));
return flocking.rules.weighted_vec.call(null,state.call(null,(1)),strength,average_velocity);
});
flocking.rules.cohere = (function flocking$rules$cohere(p__41108,p__41109,p__41110){
var map__41111 = p__41108;
var map__41111__$1 = ((((!((map__41111 == null)))?((((map__41111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41111):map__41111);
var strength = cljs.core.get.call(null,map__41111__$1,new cljs.core.Keyword(null,"strength","strength",-415606478));
var map__41112 = p__41109;
var map__41112__$1 = ((((!((map__41112 == null)))?((((map__41112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41112):map__41112);
var state = cljs.core.get.call(null,map__41112__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__41113 = p__41110;
var map__41113__$1 = ((((!((map__41113 == null)))?((((map__41113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41113):map__41113);
var average_position = cljs.core.get.call(null,map__41113__$1,new cljs.core.Keyword(null,"average-position","average-position",850828623));
return flocking.rules.weighted_vec.call(null,state.call(null,(0)),strength,average_position);
});
flocking.rules.gen_wander = (function flocking$rules$gen_wander(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"direction","direction",-633359395),(((2) * Math.PI) * Math.random()),new cljs.core.Keyword(null,"rate","rate",-1428659698),Math.random(),new cljs.core.Keyword(null,"strength","strength",-415606478),((10) * Math.random())], null);
});
flocking.rules.rand_range = (function flocking$rules$rand_range(lo,hi){
return (lo + ((hi - lo) * Math.random()));
});
flocking.rules.gen_pos = (function flocking$rules$gen_pos(p__41117){
var map__41118 = p__41117;
var map__41118__$1 = ((((!((map__41118 == null)))?((((map__41118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41118):map__41118);
var minx = cljs.core.get.call(null,map__41118__$1,new cljs.core.Keyword(null,"minx","minx",1094774569));
var maxx = cljs.core.get.call(null,map__41118__$1,new cljs.core.Keyword(null,"maxx","maxx",23572233));
var miny = cljs.core.get.call(null,map__41118__$1,new cljs.core.Keyword(null,"miny","miny",-1513078883));
var maxy = cljs.core.get.call(null,map__41118__$1,new cljs.core.Keyword(null,"maxy","maxy",726027898));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flocking.rules.rand_range.call(null,minx,maxx),flocking.rules.rand_range.call(null,miny,maxy)], null);
});
flocking.rules.gen_state = (function flocking$rules$gen_state(p__41120){
var map__41121 = p__41120;
var map__41121__$1 = ((((!((map__41121 == null)))?((((map__41121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41121):map__41121);
var minx = cljs.core.get.call(null,map__41121__$1,new cljs.core.Keyword(null,"minx","minx",1094774569));
var maxx = cljs.core.get.call(null,map__41121__$1,new cljs.core.Keyword(null,"maxx","maxx",23572233));
var miny = cljs.core.get.call(null,map__41121__$1,new cljs.core.Keyword(null,"miny","miny",-1513078883));
var maxy = cljs.core.get.call(null,map__41121__$1,new cljs.core.Keyword(null,"maxy","maxy",726027898));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flocking.rules.rand_range.call(null,minx,maxx),flocking.rules.rand_range.call(null,miny,maxy)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
});
flocking.rules.initial_state = (function flocking$rules$initial_state(num_boids,dim){
var world = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"minx","minx",1094774569),(- dim),new cljs.core.Keyword(null,"maxx","maxx",23572233),dim,new cljs.core.Keyword(null,"miny","miny",-1513078883),(- dim),new cljs.core.Keyword(null,"maxy","maxy",726027898),dim], null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"world","world",-418292623),world,new cljs.core.Keyword(null,"boids","boids",2106521410),(function (){var iter__30929__auto__ = ((function (world){
return (function flocking$rules$initial_state_$_iter__41123(s__41124){
return (new cljs.core.LazySeq(null,((function (world){
return (function (){
var s__41124__$1 = s__41124;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__41124__$1);
if(temp__5459__auto__){
var s__41124__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41124__$2)){
var c__30927__auto__ = cljs.core.chunk_first.call(null,s__41124__$2);
var size__30928__auto__ = cljs.core.count.call(null,c__30927__auto__);
var b__41126 = cljs.core.chunk_buffer.call(null,size__30928__auto__);
if((function (){var i__41125 = (0);
while(true){
if((i__41125 < size__30928__auto__)){
var _ = cljs.core._nth.call(null,c__30927__auto__,i__41125);
cljs.core.chunk_append.call(null,b__41126,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),0.6,new cljs.core.Keyword(null,"height","height",1025178622),1.0,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null),new cljs.core.Keyword(null,"max-speed","max-speed",-997417461),5.0,new cljs.core.Keyword(null,"state","state",-1988618099),flocking.rules.gen_state.call(null,world),new cljs.core.Keyword(null,"behaviors","behaviors",120724909),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"wander","wander",1245626610),cljs.core.assoc.call(null,flocking.rules.gen_wander.call(null),new cljs.core.Keyword(null,"strength","strength",-415606478),(10),new cljs.core.Keyword(null,"debug","debug",-1608172596),false),new cljs.core.Keyword(null,"separate","separate",-1624828409),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"range","range",1639692286),(2),new cljs.core.Keyword(null,"strength","strength",-415606478),(10)], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strength","strength",-415606478),(10)], null),new cljs.core.Keyword(null,"cohere","cohere",1678799519),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strength","strength",-415606478),(50)], null)], null)], null));

var G__41127 = (i__41125 + (1));
i__41125 = G__41127;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41126),flocking$rules$initial_state_$_iter__41123.call(null,cljs.core.chunk_rest.call(null,s__41124__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41126),null);
}
} else {
var _ = cljs.core.first.call(null,s__41124__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),0.6,new cljs.core.Keyword(null,"height","height",1025178622),1.0,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null),new cljs.core.Keyword(null,"max-speed","max-speed",-997417461),5.0,new cljs.core.Keyword(null,"state","state",-1988618099),flocking.rules.gen_state.call(null,world),new cljs.core.Keyword(null,"behaviors","behaviors",120724909),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"wander","wander",1245626610),cljs.core.assoc.call(null,flocking.rules.gen_wander.call(null),new cljs.core.Keyword(null,"strength","strength",-415606478),(10),new cljs.core.Keyword(null,"debug","debug",-1608172596),false),new cljs.core.Keyword(null,"separate","separate",-1624828409),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"range","range",1639692286),(2),new cljs.core.Keyword(null,"strength","strength",-415606478),(10)], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strength","strength",-415606478),(10)], null),new cljs.core.Keyword(null,"cohere","cohere",1678799519),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strength","strength",-415606478),(50)], null)], null)], null),flocking$rules$initial_state_$_iter__41123.call(null,cljs.core.rest.call(null,s__41124__$2)));
}
} else {
return null;
}
break;
}
});})(world))
,null,null));
});})(world))
;
return iter__30929__auto__.call(null,cljs.core.range.call(null,num_boids));
})(),new cljs.core.Keyword(null,"food","food",1842183121),cljs.core.repeatedly.call(null,(20),((function (world){
return (function (){
return flocking.rules.gen_pos.call(null,world);
});})(world))
)], null);
});

//# sourceMappingURL=rules.js.map?rel=1505885201551
