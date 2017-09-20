// Compiled by ClojureScript 1.9.908 {}
goog.provide('flocking.game_launcher');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('flocking.simulation');
goog.require('flocking.rules');
goog.require('flocking.quil_renderer');
flocking.game_launcher.rand_range = (function flocking$game_launcher$rand_range(lo,hi){
return (lo + ((hi - lo) * Math.random()));
});
flocking.game_launcher.gen_pos = (function flocking$game_launcher$gen_pos(p__41168){
var map__41169 = p__41168;
var map__41169__$1 = ((((!((map__41169 == null)))?((((map__41169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41169):map__41169);
var minx = cljs.core.get.call(null,map__41169__$1,new cljs.core.Keyword(null,"minx","minx",1094774569));
var maxx = cljs.core.get.call(null,map__41169__$1,new cljs.core.Keyword(null,"maxx","maxx",23572233));
var miny = cljs.core.get.call(null,map__41169__$1,new cljs.core.Keyword(null,"miny","miny",-1513078883));
var maxy = cljs.core.get.call(null,map__41169__$1,new cljs.core.Keyword(null,"maxy","maxy",726027898));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flocking.game_launcher.rand_range.call(null,minx,maxx),flocking.game_launcher.rand_range.call(null,miny,maxy)], null);
});
flocking.game_launcher.gen_state = (function flocking$game_launcher$gen_state(p__41171){
var map__41172 = p__41171;
var map__41172__$1 = ((((!((map__41172 == null)))?((((map__41172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41172):map__41172);
var minx = cljs.core.get.call(null,map__41172__$1,new cljs.core.Keyword(null,"minx","minx",1094774569));
var maxx = cljs.core.get.call(null,map__41172__$1,new cljs.core.Keyword(null,"maxx","maxx",23572233));
var miny = cljs.core.get.call(null,map__41172__$1,new cljs.core.Keyword(null,"miny","miny",-1513078883));
var maxy = cljs.core.get.call(null,map__41172__$1,new cljs.core.Keyword(null,"maxy","maxy",726027898));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flocking.game_launcher.rand_range.call(null,minx,maxx),flocking.game_launcher.rand_range.call(null,miny,maxy)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
});
flocking.game_launcher.setup = (function flocking$game_launcher$setup(num_boids){
quil.core.smooth.call(null);

quil.core.frame_rate.call(null,(30));

var dim = (20);
var world = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"minx","minx",1094774569),(- dim),new cljs.core.Keyword(null,"maxx","maxx",23572233),dim,new cljs.core.Keyword(null,"miny","miny",-1513078883),(- dim),new cljs.core.Keyword(null,"maxy","maxy",726027898),dim], null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"world","world",-418292623),world,new cljs.core.Keyword(null,"boids","boids",2106521410),(function (){var iter__30929__auto__ = ((function (dim,world){
return (function flocking$game_launcher$setup_$_iter__41174(s__41175){
return (new cljs.core.LazySeq(null,((function (dim,world){
return (function (){
var s__41175__$1 = s__41175;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__41175__$1);
if(temp__5459__auto__){
var s__41175__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41175__$2)){
var c__30927__auto__ = cljs.core.chunk_first.call(null,s__41175__$2);
var size__30928__auto__ = cljs.core.count.call(null,c__30927__auto__);
var b__41177 = cljs.core.chunk_buffer.call(null,size__30928__auto__);
if((function (){var i__41176 = (0);
while(true){
if((i__41176 < size__30928__auto__)){
var _ = cljs.core._nth.call(null,c__30927__auto__,i__41176);
cljs.core.chunk_append.call(null,b__41177,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),0.6,new cljs.core.Keyword(null,"height","height",1025178622),1.0,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null),new cljs.core.Keyword(null,"max-speed","max-speed",-997417461),5.0,new cljs.core.Keyword(null,"state","state",-1988618099),flocking.game_launcher.gen_state.call(null,world),new cljs.core.Keyword(null,"behaviors","behaviors",120724909),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"wander","wander",1245626610),cljs.core.assoc.call(null,flocking.rules.gen_wander.call(null),new cljs.core.Keyword(null,"strength","strength",-415606478),(10),new cljs.core.Keyword(null,"debug","debug",-1608172596),false),new cljs.core.Keyword(null,"separate","separate",-1624828409),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"range","range",1639692286),(2),new cljs.core.Keyword(null,"strength","strength",-415606478),(10)], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strength","strength",-415606478),(10)], null),new cljs.core.Keyword(null,"cohere","cohere",1678799519),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strength","strength",-415606478),(50)], null)], null)], null));

var G__41178 = (i__41176 + (1));
i__41176 = G__41178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41177),flocking$game_launcher$setup_$_iter__41174.call(null,cljs.core.chunk_rest.call(null,s__41175__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41177),null);
}
} else {
var _ = cljs.core.first.call(null,s__41175__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),0.6,new cljs.core.Keyword(null,"height","height",1025178622),1.0,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null),new cljs.core.Keyword(null,"max-speed","max-speed",-997417461),5.0,new cljs.core.Keyword(null,"state","state",-1988618099),flocking.game_launcher.gen_state.call(null,world),new cljs.core.Keyword(null,"behaviors","behaviors",120724909),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"wander","wander",1245626610),cljs.core.assoc.call(null,flocking.rules.gen_wander.call(null),new cljs.core.Keyword(null,"strength","strength",-415606478),(10),new cljs.core.Keyword(null,"debug","debug",-1608172596),false),new cljs.core.Keyword(null,"separate","separate",-1624828409),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"range","range",1639692286),(2),new cljs.core.Keyword(null,"strength","strength",-415606478),(10)], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strength","strength",-415606478),(10)], null),new cljs.core.Keyword(null,"cohere","cohere",1678799519),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strength","strength",-415606478),(50)], null)], null)], null),flocking$game_launcher$setup_$_iter__41174.call(null,cljs.core.rest.call(null,s__41175__$2)));
}
} else {
return null;
}
break;
}
});})(dim,world))
,null,null));
});})(dim,world))
;
return iter__30929__auto__.call(null,cljs.core.range.call(null,num_boids));
})(),new cljs.core.Keyword(null,"food","food",1842183121),cljs.core.repeatedly.call(null,(20),((function (dim,world){
return (function (){
return flocking.game_launcher.gen_pos.call(null,world);
});})(dim,world))
)], null);
});
flocking.game_launcher.launch_sketch = (function flocking$game_launcher$launch_sketch(p__41179){
var map__41180 = p__41179;
var map__41180__$1 = ((((!((map__41180 == null)))?((((map__41180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41180):map__41180);
var width = cljs.core.get.call(null,map__41180__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__41180__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var host = cljs.core.get.call(null,map__41180__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var num_boids = cljs.core.get.call(null,map__41180__$1,new cljs.core.Keyword(null,"num-boids","num-boids",-1439144615));
return quil.core.sketch.call(null,new cljs.core.Keyword(null,"title","title",636505583),"Flocking Behaviors",new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"setup","setup",1987730512),((function (map__41180,map__41180__$1,width,height,host,num_boids){
return (function (){
return flocking.game_launcher.setup.call(null,num_boids);
});})(map__41180,map__41180__$1,width,height,host,num_boids))
,new cljs.core.Keyword(null,"draw","draw",1358331674),flocking.quil_renderer.draw,new cljs.core.Keyword(null,"update","update",1045576396),flocking.simulation.sim,new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
});
flocking.game_launcher.launch_app = (function flocking$game_launcher$launch_app(host,width,height,num_boids){
return flocking.game_launcher.launch_sketch.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"num-boids","num-boids",-1439144615),num_boids], null));
});
goog.exportSymbol('flocking.game_launcher.launch_app', flocking.game_launcher.launch_app);

//# sourceMappingURL=game_launcher.js.map?rel=1505885201648
