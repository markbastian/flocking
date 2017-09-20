// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30047__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30047__auto__){
return or__30047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30047__auto__)){
return or__30047__auto__;
} else {
var or__30047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30047__auto____$1)){
return or__30047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__44234_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__44234_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__44235 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__44236 = null;
var count__44237 = (0);
var i__44238 = (0);
while(true){
if((i__44238 < count__44237)){
var n = cljs.core._nth.call(null,chunk__44236,i__44238);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44239 = seq__44235;
var G__44240 = chunk__44236;
var G__44241 = count__44237;
var G__44242 = (i__44238 + (1));
seq__44235 = G__44239;
chunk__44236 = G__44240;
count__44237 = G__44241;
i__44238 = G__44242;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq.call(null,seq__44235);
if(temp__5459__auto__){
var seq__44235__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44235__$1)){
var c__30978__auto__ = cljs.core.chunk_first.call(null,seq__44235__$1);
var G__44243 = cljs.core.chunk_rest.call(null,seq__44235__$1);
var G__44244 = c__30978__auto__;
var G__44245 = cljs.core.count.call(null,c__30978__auto__);
var G__44246 = (0);
seq__44235 = G__44243;
chunk__44236 = G__44244;
count__44237 = G__44245;
i__44238 = G__44246;
continue;
} else {
var n = cljs.core.first.call(null,seq__44235__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44247 = cljs.core.next.call(null,seq__44235__$1);
var G__44248 = null;
var G__44249 = (0);
var G__44250 = (0);
seq__44235 = G__44247;
chunk__44236 = G__44248;
count__44237 = G__44249;
i__44238 = G__44250;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__44260_44268 = cljs.core.seq.call(null,deps);
var chunk__44261_44269 = null;
var count__44262_44270 = (0);
var i__44263_44271 = (0);
while(true){
if((i__44263_44271 < count__44262_44270)){
var dep_44272 = cljs.core._nth.call(null,chunk__44261_44269,i__44263_44271);
topo_sort_helper_STAR_.call(null,dep_44272,(depth + (1)),state);

var G__44273 = seq__44260_44268;
var G__44274 = chunk__44261_44269;
var G__44275 = count__44262_44270;
var G__44276 = (i__44263_44271 + (1));
seq__44260_44268 = G__44273;
chunk__44261_44269 = G__44274;
count__44262_44270 = G__44275;
i__44263_44271 = G__44276;
continue;
} else {
var temp__5459__auto___44277 = cljs.core.seq.call(null,seq__44260_44268);
if(temp__5459__auto___44277){
var seq__44260_44278__$1 = temp__5459__auto___44277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44260_44278__$1)){
var c__30978__auto___44279 = cljs.core.chunk_first.call(null,seq__44260_44278__$1);
var G__44280 = cljs.core.chunk_rest.call(null,seq__44260_44278__$1);
var G__44281 = c__30978__auto___44279;
var G__44282 = cljs.core.count.call(null,c__30978__auto___44279);
var G__44283 = (0);
seq__44260_44268 = G__44280;
chunk__44261_44269 = G__44281;
count__44262_44270 = G__44282;
i__44263_44271 = G__44283;
continue;
} else {
var dep_44284 = cljs.core.first.call(null,seq__44260_44278__$1);
topo_sort_helper_STAR_.call(null,dep_44284,(depth + (1)),state);

var G__44285 = cljs.core.next.call(null,seq__44260_44278__$1);
var G__44286 = null;
var G__44287 = (0);
var G__44288 = (0);
seq__44260_44268 = G__44285;
chunk__44261_44269 = G__44286;
count__44262_44270 = G__44287;
i__44263_44271 = G__44288;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__44264){
var vec__44265 = p__44264;
var seq__44266 = cljs.core.seq.call(null,vec__44265);
var first__44267 = cljs.core.first.call(null,seq__44266);
var seq__44266__$1 = cljs.core.next.call(null,seq__44266);
var x = first__44267;
var xs = seq__44266__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__44265,seq__44266,first__44267,seq__44266__$1,x,xs,get_deps__$1){
return (function (p1__44251_SHARP_){
return clojure.set.difference.call(null,p1__44251_SHARP_,x);
});})(vec__44265,seq__44266,first__44267,seq__44266__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__44289 = cljs.core.seq.call(null,provides);
var chunk__44290 = null;
var count__44291 = (0);
var i__44292 = (0);
while(true){
if((i__44292 < count__44291)){
var prov = cljs.core._nth.call(null,chunk__44290,i__44292);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44293_44301 = cljs.core.seq.call(null,requires);
var chunk__44294_44302 = null;
var count__44295_44303 = (0);
var i__44296_44304 = (0);
while(true){
if((i__44296_44304 < count__44295_44303)){
var req_44305 = cljs.core._nth.call(null,chunk__44294_44302,i__44296_44304);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44305,prov);

var G__44306 = seq__44293_44301;
var G__44307 = chunk__44294_44302;
var G__44308 = count__44295_44303;
var G__44309 = (i__44296_44304 + (1));
seq__44293_44301 = G__44306;
chunk__44294_44302 = G__44307;
count__44295_44303 = G__44308;
i__44296_44304 = G__44309;
continue;
} else {
var temp__5459__auto___44310 = cljs.core.seq.call(null,seq__44293_44301);
if(temp__5459__auto___44310){
var seq__44293_44311__$1 = temp__5459__auto___44310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44293_44311__$1)){
var c__30978__auto___44312 = cljs.core.chunk_first.call(null,seq__44293_44311__$1);
var G__44313 = cljs.core.chunk_rest.call(null,seq__44293_44311__$1);
var G__44314 = c__30978__auto___44312;
var G__44315 = cljs.core.count.call(null,c__30978__auto___44312);
var G__44316 = (0);
seq__44293_44301 = G__44313;
chunk__44294_44302 = G__44314;
count__44295_44303 = G__44315;
i__44296_44304 = G__44316;
continue;
} else {
var req_44317 = cljs.core.first.call(null,seq__44293_44311__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44317,prov);

var G__44318 = cljs.core.next.call(null,seq__44293_44311__$1);
var G__44319 = null;
var G__44320 = (0);
var G__44321 = (0);
seq__44293_44301 = G__44318;
chunk__44294_44302 = G__44319;
count__44295_44303 = G__44320;
i__44296_44304 = G__44321;
continue;
}
} else {
}
}
break;
}

var G__44322 = seq__44289;
var G__44323 = chunk__44290;
var G__44324 = count__44291;
var G__44325 = (i__44292 + (1));
seq__44289 = G__44322;
chunk__44290 = G__44323;
count__44291 = G__44324;
i__44292 = G__44325;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq.call(null,seq__44289);
if(temp__5459__auto__){
var seq__44289__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44289__$1)){
var c__30978__auto__ = cljs.core.chunk_first.call(null,seq__44289__$1);
var G__44326 = cljs.core.chunk_rest.call(null,seq__44289__$1);
var G__44327 = c__30978__auto__;
var G__44328 = cljs.core.count.call(null,c__30978__auto__);
var G__44329 = (0);
seq__44289 = G__44326;
chunk__44290 = G__44327;
count__44291 = G__44328;
i__44292 = G__44329;
continue;
} else {
var prov = cljs.core.first.call(null,seq__44289__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44297_44330 = cljs.core.seq.call(null,requires);
var chunk__44298_44331 = null;
var count__44299_44332 = (0);
var i__44300_44333 = (0);
while(true){
if((i__44300_44333 < count__44299_44332)){
var req_44334 = cljs.core._nth.call(null,chunk__44298_44331,i__44300_44333);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44334,prov);

var G__44335 = seq__44297_44330;
var G__44336 = chunk__44298_44331;
var G__44337 = count__44299_44332;
var G__44338 = (i__44300_44333 + (1));
seq__44297_44330 = G__44335;
chunk__44298_44331 = G__44336;
count__44299_44332 = G__44337;
i__44300_44333 = G__44338;
continue;
} else {
var temp__5459__auto___44339__$1 = cljs.core.seq.call(null,seq__44297_44330);
if(temp__5459__auto___44339__$1){
var seq__44297_44340__$1 = temp__5459__auto___44339__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44297_44340__$1)){
var c__30978__auto___44341 = cljs.core.chunk_first.call(null,seq__44297_44340__$1);
var G__44342 = cljs.core.chunk_rest.call(null,seq__44297_44340__$1);
var G__44343 = c__30978__auto___44341;
var G__44344 = cljs.core.count.call(null,c__30978__auto___44341);
var G__44345 = (0);
seq__44297_44330 = G__44342;
chunk__44298_44331 = G__44343;
count__44299_44332 = G__44344;
i__44300_44333 = G__44345;
continue;
} else {
var req_44346 = cljs.core.first.call(null,seq__44297_44340__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44346,prov);

var G__44347 = cljs.core.next.call(null,seq__44297_44340__$1);
var G__44348 = null;
var G__44349 = (0);
var G__44350 = (0);
seq__44297_44330 = G__44347;
chunk__44298_44331 = G__44348;
count__44299_44332 = G__44349;
i__44300_44333 = G__44350;
continue;
}
} else {
}
}
break;
}

var G__44351 = cljs.core.next.call(null,seq__44289__$1);
var G__44352 = null;
var G__44353 = (0);
var G__44354 = (0);
seq__44289 = G__44351;
chunk__44290 = G__44352;
count__44291 = G__44353;
i__44292 = G__44354;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__44355_44359 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__44356_44360 = null;
var count__44357_44361 = (0);
var i__44358_44362 = (0);
while(true){
if((i__44358_44362 < count__44357_44361)){
var ns_44363 = cljs.core._nth.call(null,chunk__44356_44360,i__44358_44362);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44363);

var G__44364 = seq__44355_44359;
var G__44365 = chunk__44356_44360;
var G__44366 = count__44357_44361;
var G__44367 = (i__44358_44362 + (1));
seq__44355_44359 = G__44364;
chunk__44356_44360 = G__44365;
count__44357_44361 = G__44366;
i__44358_44362 = G__44367;
continue;
} else {
var temp__5459__auto___44368 = cljs.core.seq.call(null,seq__44355_44359);
if(temp__5459__auto___44368){
var seq__44355_44369__$1 = temp__5459__auto___44368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44355_44369__$1)){
var c__30978__auto___44370 = cljs.core.chunk_first.call(null,seq__44355_44369__$1);
var G__44371 = cljs.core.chunk_rest.call(null,seq__44355_44369__$1);
var G__44372 = c__30978__auto___44370;
var G__44373 = cljs.core.count.call(null,c__30978__auto___44370);
var G__44374 = (0);
seq__44355_44359 = G__44371;
chunk__44356_44360 = G__44372;
count__44357_44361 = G__44373;
i__44358_44362 = G__44374;
continue;
} else {
var ns_44375 = cljs.core.first.call(null,seq__44355_44369__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44375);

var G__44376 = cljs.core.next.call(null,seq__44355_44369__$1);
var G__44377 = null;
var G__44378 = (0);
var G__44379 = (0);
seq__44355_44359 = G__44376;
chunk__44356_44360 = G__44377;
count__44357_44361 = G__44378;
i__44358_44362 = G__44379;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30047__auto__ = goog.require__;
if(cljs.core.truth_(or__30047__auto__)){
return or__30047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__44380__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__44380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44381__i = 0, G__44381__a = new Array(arguments.length -  0);
while (G__44381__i < G__44381__a.length) {G__44381__a[G__44381__i] = arguments[G__44381__i + 0]; ++G__44381__i;}
  args = new cljs.core.IndexedSeq(G__44381__a,0,null);
} 
return G__44380__delegate.call(this,args);};
G__44380.cljs$lang$maxFixedArity = 0;
G__44380.cljs$lang$applyTo = (function (arglist__44382){
var args = cljs.core.seq(arglist__44382);
return G__44380__delegate(args);
});
G__44380.cljs$core$IFn$_invoke$arity$variadic = G__44380__delegate;
return G__44380;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__44383_SHARP_,p2__44384_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44383_SHARP_)].join('')),p2__44384_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__44385_SHARP_,p2__44386_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44385_SHARP_)].join(''),p2__44386_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__44387 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__44387.addCallback(((function (G__44387){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__44387))
);

G__44387.addErrback(((function (G__44387){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__44387))
);

return G__44387;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__44388 = cljs.core._EQ_;
var expr__44389 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__44388.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__44389))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__44388,expr__44389){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__44388,expr__44389))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__44388,expr__44389){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e44391){if((e44391 instanceof Error)){
var e = e44391;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44391;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__44388,expr__44389))
} else {
if(cljs.core.truth_(pred__44388.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__44389))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__44388.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__44389))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__44388.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__44389))){
return ((function (pred__44388,expr__44389){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e44392){if((e44392 instanceof Error)){
var e = e44392;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44392;

}
}})());
});
;})(pred__44388,expr__44389))
} else {
return ((function (pred__44388,expr__44389){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__44388,expr__44389))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__44393,callback){
var map__44394 = p__44393;
var map__44394__$1 = ((((!((map__44394 == null)))?((((map__44394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44394):map__44394);
var file_msg = map__44394__$1;
var request_url = cljs.core.get.call(null,map__44394__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__44394,map__44394__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__44394,map__44394__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34735__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto__){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto__){
return (function (state_44418){
var state_val_44419 = (state_44418[(1)]);
if((state_val_44419 === (7))){
var inst_44414 = (state_44418[(2)]);
var state_44418__$1 = state_44418;
var statearr_44420_44437 = state_44418__$1;
(statearr_44420_44437[(2)] = inst_44414);

(statearr_44420_44437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44419 === (1))){
var state_44418__$1 = state_44418;
var statearr_44421_44438 = state_44418__$1;
(statearr_44421_44438[(2)] = null);

(statearr_44421_44438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44419 === (4))){
var inst_44398 = (state_44418[(7)]);
var inst_44398__$1 = (state_44418[(2)]);
var state_44418__$1 = (function (){var statearr_44422 = state_44418;
(statearr_44422[(7)] = inst_44398__$1);

return statearr_44422;
})();
if(cljs.core.truth_(inst_44398__$1)){
var statearr_44423_44439 = state_44418__$1;
(statearr_44423_44439[(1)] = (5));

} else {
var statearr_44424_44440 = state_44418__$1;
(statearr_44424_44440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44419 === (6))){
var state_44418__$1 = state_44418;
var statearr_44425_44441 = state_44418__$1;
(statearr_44425_44441[(2)] = null);

(statearr_44425_44441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44419 === (3))){
var inst_44416 = (state_44418[(2)]);
var state_44418__$1 = state_44418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44418__$1,inst_44416);
} else {
if((state_val_44419 === (2))){
var state_44418__$1 = state_44418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44418__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_44419 === (11))){
var inst_44410 = (state_44418[(2)]);
var state_44418__$1 = (function (){var statearr_44426 = state_44418;
(statearr_44426[(8)] = inst_44410);

return statearr_44426;
})();
var statearr_44427_44442 = state_44418__$1;
(statearr_44427_44442[(2)] = null);

(statearr_44427_44442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44419 === (9))){
var inst_44404 = (state_44418[(9)]);
var inst_44402 = (state_44418[(10)]);
var inst_44406 = inst_44404.call(null,inst_44402);
var state_44418__$1 = state_44418;
var statearr_44428_44443 = state_44418__$1;
(statearr_44428_44443[(2)] = inst_44406);

(statearr_44428_44443[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44419 === (5))){
var inst_44398 = (state_44418[(7)]);
var inst_44400 = figwheel.client.file_reloading.blocking_load.call(null,inst_44398);
var state_44418__$1 = state_44418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44418__$1,(8),inst_44400);
} else {
if((state_val_44419 === (10))){
var inst_44402 = (state_44418[(10)]);
var inst_44408 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_44402);
var state_44418__$1 = state_44418;
var statearr_44429_44444 = state_44418__$1;
(statearr_44429_44444[(2)] = inst_44408);

(statearr_44429_44444[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44419 === (8))){
var inst_44404 = (state_44418[(9)]);
var inst_44398 = (state_44418[(7)]);
var inst_44402 = (state_44418[(2)]);
var inst_44403 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_44404__$1 = cljs.core.get.call(null,inst_44403,inst_44398);
var state_44418__$1 = (function (){var statearr_44430 = state_44418;
(statearr_44430[(9)] = inst_44404__$1);

(statearr_44430[(10)] = inst_44402);

return statearr_44430;
})();
if(cljs.core.truth_(inst_44404__$1)){
var statearr_44431_44445 = state_44418__$1;
(statearr_44431_44445[(1)] = (9));

} else {
var statearr_44432_44446 = state_44418__$1;
(statearr_44432_44446[(1)] = (10));

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
});})(c__34735__auto__))
;
return ((function (switch__34712__auto__,c__34735__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34713__auto__ = null;
var figwheel$client$file_reloading$state_machine__34713__auto____0 = (function (){
var statearr_44433 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44433[(0)] = figwheel$client$file_reloading$state_machine__34713__auto__);

(statearr_44433[(1)] = (1));

return statearr_44433;
});
var figwheel$client$file_reloading$state_machine__34713__auto____1 = (function (state_44418){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_44418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e44434){if((e44434 instanceof Object)){
var ex__34716__auto__ = e44434;
var statearr_44435_44447 = state_44418;
(statearr_44435_44447[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44448 = state_44418;
state_44418 = G__44448;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34713__auto__ = function(state_44418){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34713__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34713__auto____1.call(this,state_44418);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34713__auto____0;
figwheel$client$file_reloading$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34713__auto____1;
return figwheel$client$file_reloading$state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto__))
})();
var state__34737__auto__ = (function (){var statearr_44436 = f__34736__auto__.call(null);
(statearr_44436[(6)] = c__34735__auto__);

return statearr_44436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto__))
);

return c__34735__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__44449,callback){
var map__44450 = p__44449;
var map__44450__$1 = ((((!((map__44450 == null)))?((((map__44450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44450):map__44450);
var file_msg = map__44450__$1;
var namespace = cljs.core.get.call(null,map__44450__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__44450,map__44450__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__44450,map__44450__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__44452){
var map__44453 = p__44452;
var map__44453__$1 = ((((!((map__44453 == null)))?((((map__44453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44453):map__44453);
var file_msg = map__44453__$1;
var namespace = cljs.core.get.call(null,map__44453__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__44455){
var map__44456 = p__44455;
var map__44456__$1 = ((((!((map__44456 == null)))?((((map__44456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44456):map__44456);
var file_msg = map__44456__$1;
var namespace = cljs.core.get.call(null,map__44456__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30035__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30035__auto__){
var or__30047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30047__auto__)){
return or__30047__auto__;
} else {
var or__30047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30047__auto____$1)){
return or__30047__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30035__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__44458,callback){
var map__44459 = p__44458;
var map__44459__$1 = ((((!((map__44459 == null)))?((((map__44459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44459):map__44459);
var file_msg = map__44459__$1;
var request_url = cljs.core.get.call(null,map__44459__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__44459__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__34735__auto___44509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto___44509,out){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto___44509,out){
return (function (state_44494){
var state_val_44495 = (state_44494[(1)]);
if((state_val_44495 === (1))){
var inst_44468 = cljs.core.seq.call(null,files);
var inst_44469 = cljs.core.first.call(null,inst_44468);
var inst_44470 = cljs.core.next.call(null,inst_44468);
var inst_44471 = files;
var state_44494__$1 = (function (){var statearr_44496 = state_44494;
(statearr_44496[(7)] = inst_44470);

(statearr_44496[(8)] = inst_44469);

(statearr_44496[(9)] = inst_44471);

return statearr_44496;
})();
var statearr_44497_44510 = state_44494__$1;
(statearr_44497_44510[(2)] = null);

(statearr_44497_44510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44495 === (2))){
var inst_44477 = (state_44494[(10)]);
var inst_44471 = (state_44494[(9)]);
var inst_44476 = cljs.core.seq.call(null,inst_44471);
var inst_44477__$1 = cljs.core.first.call(null,inst_44476);
var inst_44478 = cljs.core.next.call(null,inst_44476);
var inst_44479 = (inst_44477__$1 == null);
var inst_44480 = cljs.core.not.call(null,inst_44479);
var state_44494__$1 = (function (){var statearr_44498 = state_44494;
(statearr_44498[(11)] = inst_44478);

(statearr_44498[(10)] = inst_44477__$1);

return statearr_44498;
})();
if(inst_44480){
var statearr_44499_44511 = state_44494__$1;
(statearr_44499_44511[(1)] = (4));

} else {
var statearr_44500_44512 = state_44494__$1;
(statearr_44500_44512[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44495 === (3))){
var inst_44492 = (state_44494[(2)]);
var state_44494__$1 = state_44494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44494__$1,inst_44492);
} else {
if((state_val_44495 === (4))){
var inst_44477 = (state_44494[(10)]);
var inst_44482 = figwheel.client.file_reloading.reload_js_file.call(null,inst_44477);
var state_44494__$1 = state_44494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44494__$1,(7),inst_44482);
} else {
if((state_val_44495 === (5))){
var inst_44488 = cljs.core.async.close_BANG_.call(null,out);
var state_44494__$1 = state_44494;
var statearr_44501_44513 = state_44494__$1;
(statearr_44501_44513[(2)] = inst_44488);

(statearr_44501_44513[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44495 === (6))){
var inst_44490 = (state_44494[(2)]);
var state_44494__$1 = state_44494;
var statearr_44502_44514 = state_44494__$1;
(statearr_44502_44514[(2)] = inst_44490);

(statearr_44502_44514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44495 === (7))){
var inst_44478 = (state_44494[(11)]);
var inst_44484 = (state_44494[(2)]);
var inst_44485 = cljs.core.async.put_BANG_.call(null,out,inst_44484);
var inst_44471 = inst_44478;
var state_44494__$1 = (function (){var statearr_44503 = state_44494;
(statearr_44503[(12)] = inst_44485);

(statearr_44503[(9)] = inst_44471);

return statearr_44503;
})();
var statearr_44504_44515 = state_44494__$1;
(statearr_44504_44515[(2)] = null);

(statearr_44504_44515[(1)] = (2));


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
});})(c__34735__auto___44509,out))
;
return ((function (switch__34712__auto__,c__34735__auto___44509,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34713__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34713__auto____0 = (function (){
var statearr_44505 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44505[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34713__auto__);

(statearr_44505[(1)] = (1));

return statearr_44505;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34713__auto____1 = (function (state_44494){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_44494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e44506){if((e44506 instanceof Object)){
var ex__34716__auto__ = e44506;
var statearr_44507_44516 = state_44494;
(statearr_44507_44516[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44517 = state_44494;
state_44494 = G__44517;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34713__auto__ = function(state_44494){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34713__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34713__auto____1.call(this,state_44494);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34713__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34713__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto___44509,out))
})();
var state__34737__auto__ = (function (){var statearr_44508 = f__34736__auto__.call(null);
(statearr_44508[(6)] = c__34735__auto___44509);

return statearr_44508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto___44509,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__44518,opts){
var map__44519 = p__44518;
var map__44519__$1 = ((((!((map__44519 == null)))?((((map__44519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44519):map__44519);
var eval_body = cljs.core.get.call(null,map__44519__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__44519__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30035__auto__ = eval_body;
if(cljs.core.truth_(and__30035__auto__)){
return typeof eval_body === 'string';
} else {
return and__30035__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e44521){var e = e44521;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__44522_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44522_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5457__auto__)){
var file_msg = temp__5457__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__44523){
var vec__44524 = p__44523;
var k = cljs.core.nth.call(null,vec__44524,(0),null);
var v = cljs.core.nth.call(null,vec__44524,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__44527){
var vec__44528 = p__44527;
var k = cljs.core.nth.call(null,vec__44528,(0),null);
var v = cljs.core.nth.call(null,vec__44528,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__44534,p__44535){
var map__44536 = p__44534;
var map__44536__$1 = ((((!((map__44536 == null)))?((((map__44536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44536):map__44536);
var opts = map__44536__$1;
var before_jsload = cljs.core.get.call(null,map__44536__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__44536__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__44536__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__44537 = p__44535;
var map__44537__$1 = ((((!((map__44537 == null)))?((((map__44537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44537.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44537):map__44537);
var msg = map__44537__$1;
var files = cljs.core.get.call(null,map__44537__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__44537__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__44537__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34735__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto__,map__44536,map__44536__$1,opts,before_jsload,on_jsload,reload_dependents,map__44537,map__44537__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto__,map__44536,map__44536__$1,opts,before_jsload,on_jsload,reload_dependents,map__44537,map__44537__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_44691){
var state_val_44692 = (state_44691[(1)]);
if((state_val_44692 === (7))){
var inst_44551 = (state_44691[(7)]);
var inst_44554 = (state_44691[(8)]);
var inst_44553 = (state_44691[(9)]);
var inst_44552 = (state_44691[(10)]);
var inst_44559 = cljs.core._nth.call(null,inst_44552,inst_44554);
var inst_44560 = figwheel.client.file_reloading.eval_body.call(null,inst_44559,opts);
var inst_44561 = (inst_44554 + (1));
var tmp44693 = inst_44551;
var tmp44694 = inst_44553;
var tmp44695 = inst_44552;
var inst_44551__$1 = tmp44693;
var inst_44552__$1 = tmp44695;
var inst_44553__$1 = tmp44694;
var inst_44554__$1 = inst_44561;
var state_44691__$1 = (function (){var statearr_44696 = state_44691;
(statearr_44696[(7)] = inst_44551__$1);

(statearr_44696[(8)] = inst_44554__$1);

(statearr_44696[(11)] = inst_44560);

(statearr_44696[(9)] = inst_44553__$1);

(statearr_44696[(10)] = inst_44552__$1);

return statearr_44696;
})();
var statearr_44697_44780 = state_44691__$1;
(statearr_44697_44780[(2)] = null);

(statearr_44697_44780[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (20))){
var inst_44594 = (state_44691[(12)]);
var inst_44602 = figwheel.client.file_reloading.sort_files.call(null,inst_44594);
var state_44691__$1 = state_44691;
var statearr_44698_44781 = state_44691__$1;
(statearr_44698_44781[(2)] = inst_44602);

(statearr_44698_44781[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (27))){
var state_44691__$1 = state_44691;
var statearr_44699_44782 = state_44691__$1;
(statearr_44699_44782[(2)] = null);

(statearr_44699_44782[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (1))){
var inst_44543 = (state_44691[(13)]);
var inst_44540 = before_jsload.call(null,files);
var inst_44541 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_44542 = (function (){return ((function (inst_44543,inst_44540,inst_44541,state_val_44692,c__34735__auto__,map__44536,map__44536__$1,opts,before_jsload,on_jsload,reload_dependents,map__44537,map__44537__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44531_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44531_SHARP_);
});
;})(inst_44543,inst_44540,inst_44541,state_val_44692,c__34735__auto__,map__44536,map__44536__$1,opts,before_jsload,on_jsload,reload_dependents,map__44537,map__44537__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44543__$1 = cljs.core.filter.call(null,inst_44542,files);
var inst_44544 = cljs.core.not_empty.call(null,inst_44543__$1);
var state_44691__$1 = (function (){var statearr_44700 = state_44691;
(statearr_44700[(13)] = inst_44543__$1);

(statearr_44700[(14)] = inst_44541);

(statearr_44700[(15)] = inst_44540);

return statearr_44700;
})();
if(cljs.core.truth_(inst_44544)){
var statearr_44701_44783 = state_44691__$1;
(statearr_44701_44783[(1)] = (2));

} else {
var statearr_44702_44784 = state_44691__$1;
(statearr_44702_44784[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (24))){
var state_44691__$1 = state_44691;
var statearr_44703_44785 = state_44691__$1;
(statearr_44703_44785[(2)] = null);

(statearr_44703_44785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (39))){
var inst_44644 = (state_44691[(16)]);
var state_44691__$1 = state_44691;
var statearr_44704_44786 = state_44691__$1;
(statearr_44704_44786[(2)] = inst_44644);

(statearr_44704_44786[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (46))){
var inst_44686 = (state_44691[(2)]);
var state_44691__$1 = state_44691;
var statearr_44705_44787 = state_44691__$1;
(statearr_44705_44787[(2)] = inst_44686);

(statearr_44705_44787[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (4))){
var inst_44588 = (state_44691[(2)]);
var inst_44589 = cljs.core.List.EMPTY;
var inst_44590 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_44589);
var inst_44591 = (function (){return ((function (inst_44588,inst_44589,inst_44590,state_val_44692,c__34735__auto__,map__44536,map__44536__$1,opts,before_jsload,on_jsload,reload_dependents,map__44537,map__44537__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44532_SHARP_){
var and__30035__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44532_SHARP_);
if(cljs.core.truth_(and__30035__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44532_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__44532_SHARP_)));
} else {
return and__30035__auto__;
}
});
;})(inst_44588,inst_44589,inst_44590,state_val_44692,c__34735__auto__,map__44536,map__44536__$1,opts,before_jsload,on_jsload,reload_dependents,map__44537,map__44537__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44592 = cljs.core.filter.call(null,inst_44591,files);
var inst_44593 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_44594 = cljs.core.concat.call(null,inst_44592,inst_44593);
var state_44691__$1 = (function (){var statearr_44706 = state_44691;
(statearr_44706[(12)] = inst_44594);

(statearr_44706[(17)] = inst_44590);

(statearr_44706[(18)] = inst_44588);

return statearr_44706;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_44707_44788 = state_44691__$1;
(statearr_44707_44788[(1)] = (16));

} else {
var statearr_44708_44789 = state_44691__$1;
(statearr_44708_44789[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (15))){
var inst_44578 = (state_44691[(2)]);
var state_44691__$1 = state_44691;
var statearr_44709_44790 = state_44691__$1;
(statearr_44709_44790[(2)] = inst_44578);

(statearr_44709_44790[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (21))){
var inst_44604 = (state_44691[(19)]);
var inst_44604__$1 = (state_44691[(2)]);
var inst_44605 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_44604__$1);
var state_44691__$1 = (function (){var statearr_44710 = state_44691;
(statearr_44710[(19)] = inst_44604__$1);

return statearr_44710;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44691__$1,(22),inst_44605);
} else {
if((state_val_44692 === (31))){
var inst_44689 = (state_44691[(2)]);
var state_44691__$1 = state_44691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44691__$1,inst_44689);
} else {
if((state_val_44692 === (32))){
var inst_44644 = (state_44691[(16)]);
var inst_44649 = inst_44644.cljs$lang$protocol_mask$partition0$;
var inst_44650 = (inst_44649 & (64));
var inst_44651 = inst_44644.cljs$core$ISeq$;
var inst_44652 = (cljs.core.PROTOCOL_SENTINEL === inst_44651);
var inst_44653 = (inst_44650) || (inst_44652);
var state_44691__$1 = state_44691;
if(cljs.core.truth_(inst_44653)){
var statearr_44711_44791 = state_44691__$1;
(statearr_44711_44791[(1)] = (35));

} else {
var statearr_44712_44792 = state_44691__$1;
(statearr_44712_44792[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (40))){
var inst_44666 = (state_44691[(20)]);
var inst_44665 = (state_44691[(2)]);
var inst_44666__$1 = cljs.core.get.call(null,inst_44665,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_44667 = cljs.core.get.call(null,inst_44665,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_44668 = cljs.core.not_empty.call(null,inst_44666__$1);
var state_44691__$1 = (function (){var statearr_44713 = state_44691;
(statearr_44713[(21)] = inst_44667);

(statearr_44713[(20)] = inst_44666__$1);

return statearr_44713;
})();
if(cljs.core.truth_(inst_44668)){
var statearr_44714_44793 = state_44691__$1;
(statearr_44714_44793[(1)] = (41));

} else {
var statearr_44715_44794 = state_44691__$1;
(statearr_44715_44794[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (33))){
var state_44691__$1 = state_44691;
var statearr_44716_44795 = state_44691__$1;
(statearr_44716_44795[(2)] = false);

(statearr_44716_44795[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (13))){
var inst_44564 = (state_44691[(22)]);
var inst_44568 = cljs.core.chunk_first.call(null,inst_44564);
var inst_44569 = cljs.core.chunk_rest.call(null,inst_44564);
var inst_44570 = cljs.core.count.call(null,inst_44568);
var inst_44551 = inst_44569;
var inst_44552 = inst_44568;
var inst_44553 = inst_44570;
var inst_44554 = (0);
var state_44691__$1 = (function (){var statearr_44717 = state_44691;
(statearr_44717[(7)] = inst_44551);

(statearr_44717[(8)] = inst_44554);

(statearr_44717[(9)] = inst_44553);

(statearr_44717[(10)] = inst_44552);

return statearr_44717;
})();
var statearr_44718_44796 = state_44691__$1;
(statearr_44718_44796[(2)] = null);

(statearr_44718_44796[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (22))){
var inst_44607 = (state_44691[(23)]);
var inst_44612 = (state_44691[(24)]);
var inst_44608 = (state_44691[(25)]);
var inst_44604 = (state_44691[(19)]);
var inst_44607__$1 = (state_44691[(2)]);
var inst_44608__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44607__$1);
var inst_44609 = (function (){var all_files = inst_44604;
var res_SINGLEQUOTE_ = inst_44607__$1;
var res = inst_44608__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_44607,inst_44612,inst_44608,inst_44604,inst_44607__$1,inst_44608__$1,state_val_44692,c__34735__auto__,map__44536,map__44536__$1,opts,before_jsload,on_jsload,reload_dependents,map__44537,map__44537__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44533_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__44533_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_44607,inst_44612,inst_44608,inst_44604,inst_44607__$1,inst_44608__$1,state_val_44692,c__34735__auto__,map__44536,map__44536__$1,opts,before_jsload,on_jsload,reload_dependents,map__44537,map__44537__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44610 = cljs.core.filter.call(null,inst_44609,inst_44607__$1);
var inst_44611 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_44612__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44611);
var inst_44613 = cljs.core.not_empty.call(null,inst_44612__$1);
var state_44691__$1 = (function (){var statearr_44719 = state_44691;
(statearr_44719[(26)] = inst_44610);

(statearr_44719[(23)] = inst_44607__$1);

(statearr_44719[(24)] = inst_44612__$1);

(statearr_44719[(25)] = inst_44608__$1);

return statearr_44719;
})();
if(cljs.core.truth_(inst_44613)){
var statearr_44720_44797 = state_44691__$1;
(statearr_44720_44797[(1)] = (23));

} else {
var statearr_44721_44798 = state_44691__$1;
(statearr_44721_44798[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (36))){
var state_44691__$1 = state_44691;
var statearr_44722_44799 = state_44691__$1;
(statearr_44722_44799[(2)] = false);

(statearr_44722_44799[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (41))){
var inst_44666 = (state_44691[(20)]);
var inst_44670 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_44671 = cljs.core.map.call(null,inst_44670,inst_44666);
var inst_44672 = cljs.core.pr_str.call(null,inst_44671);
var inst_44673 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44672)].join('');
var inst_44674 = figwheel.client.utils.log.call(null,inst_44673);
var state_44691__$1 = state_44691;
var statearr_44723_44800 = state_44691__$1;
(statearr_44723_44800[(2)] = inst_44674);

(statearr_44723_44800[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (43))){
var inst_44667 = (state_44691[(21)]);
var inst_44677 = (state_44691[(2)]);
var inst_44678 = cljs.core.not_empty.call(null,inst_44667);
var state_44691__$1 = (function (){var statearr_44724 = state_44691;
(statearr_44724[(27)] = inst_44677);

return statearr_44724;
})();
if(cljs.core.truth_(inst_44678)){
var statearr_44725_44801 = state_44691__$1;
(statearr_44725_44801[(1)] = (44));

} else {
var statearr_44726_44802 = state_44691__$1;
(statearr_44726_44802[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (29))){
var inst_44610 = (state_44691[(26)]);
var inst_44607 = (state_44691[(23)]);
var inst_44612 = (state_44691[(24)]);
var inst_44608 = (state_44691[(25)]);
var inst_44604 = (state_44691[(19)]);
var inst_44644 = (state_44691[(16)]);
var inst_44640 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_44643 = (function (){var all_files = inst_44604;
var res_SINGLEQUOTE_ = inst_44607;
var res = inst_44608;
var files_not_loaded = inst_44610;
var dependencies_that_loaded = inst_44612;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44610,inst_44607,inst_44612,inst_44608,inst_44604,inst_44644,inst_44640,state_val_44692,c__34735__auto__,map__44536,map__44536__$1,opts,before_jsload,on_jsload,reload_dependents,map__44537,map__44537__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44642){
var map__44727 = p__44642;
var map__44727__$1 = ((((!((map__44727 == null)))?((((map__44727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44727.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44727):map__44727);
var namespace = cljs.core.get.call(null,map__44727__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44610,inst_44607,inst_44612,inst_44608,inst_44604,inst_44644,inst_44640,state_val_44692,c__34735__auto__,map__44536,map__44536__$1,opts,before_jsload,on_jsload,reload_dependents,map__44537,map__44537__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44644__$1 = cljs.core.group_by.call(null,inst_44643,inst_44610);
var inst_44646 = (inst_44644__$1 == null);
var inst_44647 = cljs.core.not.call(null,inst_44646);
var state_44691__$1 = (function (){var statearr_44729 = state_44691;
(statearr_44729[(28)] = inst_44640);

(statearr_44729[(16)] = inst_44644__$1);

return statearr_44729;
})();
if(inst_44647){
var statearr_44730_44803 = state_44691__$1;
(statearr_44730_44803[(1)] = (32));

} else {
var statearr_44731_44804 = state_44691__$1;
(statearr_44731_44804[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (44))){
var inst_44667 = (state_44691[(21)]);
var inst_44680 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44667);
var inst_44681 = cljs.core.pr_str.call(null,inst_44680);
var inst_44682 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44681)].join('');
var inst_44683 = figwheel.client.utils.log.call(null,inst_44682);
var state_44691__$1 = state_44691;
var statearr_44732_44805 = state_44691__$1;
(statearr_44732_44805[(2)] = inst_44683);

(statearr_44732_44805[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (6))){
var inst_44585 = (state_44691[(2)]);
var state_44691__$1 = state_44691;
var statearr_44733_44806 = state_44691__$1;
(statearr_44733_44806[(2)] = inst_44585);

(statearr_44733_44806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (28))){
var inst_44610 = (state_44691[(26)]);
var inst_44637 = (state_44691[(2)]);
var inst_44638 = cljs.core.not_empty.call(null,inst_44610);
var state_44691__$1 = (function (){var statearr_44734 = state_44691;
(statearr_44734[(29)] = inst_44637);

return statearr_44734;
})();
if(cljs.core.truth_(inst_44638)){
var statearr_44735_44807 = state_44691__$1;
(statearr_44735_44807[(1)] = (29));

} else {
var statearr_44736_44808 = state_44691__$1;
(statearr_44736_44808[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (25))){
var inst_44608 = (state_44691[(25)]);
var inst_44624 = (state_44691[(2)]);
var inst_44625 = cljs.core.not_empty.call(null,inst_44608);
var state_44691__$1 = (function (){var statearr_44737 = state_44691;
(statearr_44737[(30)] = inst_44624);

return statearr_44737;
})();
if(cljs.core.truth_(inst_44625)){
var statearr_44738_44809 = state_44691__$1;
(statearr_44738_44809[(1)] = (26));

} else {
var statearr_44739_44810 = state_44691__$1;
(statearr_44739_44810[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (34))){
var inst_44660 = (state_44691[(2)]);
var state_44691__$1 = state_44691;
if(cljs.core.truth_(inst_44660)){
var statearr_44740_44811 = state_44691__$1;
(statearr_44740_44811[(1)] = (38));

} else {
var statearr_44741_44812 = state_44691__$1;
(statearr_44741_44812[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (17))){
var state_44691__$1 = state_44691;
var statearr_44742_44813 = state_44691__$1;
(statearr_44742_44813[(2)] = recompile_dependents);

(statearr_44742_44813[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (3))){
var state_44691__$1 = state_44691;
var statearr_44743_44814 = state_44691__$1;
(statearr_44743_44814[(2)] = null);

(statearr_44743_44814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (12))){
var inst_44581 = (state_44691[(2)]);
var state_44691__$1 = state_44691;
var statearr_44744_44815 = state_44691__$1;
(statearr_44744_44815[(2)] = inst_44581);

(statearr_44744_44815[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (2))){
var inst_44543 = (state_44691[(13)]);
var inst_44550 = cljs.core.seq.call(null,inst_44543);
var inst_44551 = inst_44550;
var inst_44552 = null;
var inst_44553 = (0);
var inst_44554 = (0);
var state_44691__$1 = (function (){var statearr_44745 = state_44691;
(statearr_44745[(7)] = inst_44551);

(statearr_44745[(8)] = inst_44554);

(statearr_44745[(9)] = inst_44553);

(statearr_44745[(10)] = inst_44552);

return statearr_44745;
})();
var statearr_44746_44816 = state_44691__$1;
(statearr_44746_44816[(2)] = null);

(statearr_44746_44816[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (23))){
var inst_44610 = (state_44691[(26)]);
var inst_44607 = (state_44691[(23)]);
var inst_44612 = (state_44691[(24)]);
var inst_44608 = (state_44691[(25)]);
var inst_44604 = (state_44691[(19)]);
var inst_44615 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_44617 = (function (){var all_files = inst_44604;
var res_SINGLEQUOTE_ = inst_44607;
var res = inst_44608;
var files_not_loaded = inst_44610;
var dependencies_that_loaded = inst_44612;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44610,inst_44607,inst_44612,inst_44608,inst_44604,inst_44615,state_val_44692,c__34735__auto__,map__44536,map__44536__$1,opts,before_jsload,on_jsload,reload_dependents,map__44537,map__44537__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44616){
var map__44747 = p__44616;
var map__44747__$1 = ((((!((map__44747 == null)))?((((map__44747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44747):map__44747);
var request_url = cljs.core.get.call(null,map__44747__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44610,inst_44607,inst_44612,inst_44608,inst_44604,inst_44615,state_val_44692,c__34735__auto__,map__44536,map__44536__$1,opts,before_jsload,on_jsload,reload_dependents,map__44537,map__44537__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44618 = cljs.core.reverse.call(null,inst_44612);
var inst_44619 = cljs.core.map.call(null,inst_44617,inst_44618);
var inst_44620 = cljs.core.pr_str.call(null,inst_44619);
var inst_44621 = figwheel.client.utils.log.call(null,inst_44620);
var state_44691__$1 = (function (){var statearr_44749 = state_44691;
(statearr_44749[(31)] = inst_44615);

return statearr_44749;
})();
var statearr_44750_44817 = state_44691__$1;
(statearr_44750_44817[(2)] = inst_44621);

(statearr_44750_44817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (35))){
var state_44691__$1 = state_44691;
var statearr_44751_44818 = state_44691__$1;
(statearr_44751_44818[(2)] = true);

(statearr_44751_44818[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (19))){
var inst_44594 = (state_44691[(12)]);
var inst_44600 = figwheel.client.file_reloading.expand_files.call(null,inst_44594);
var state_44691__$1 = state_44691;
var statearr_44752_44819 = state_44691__$1;
(statearr_44752_44819[(2)] = inst_44600);

(statearr_44752_44819[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (11))){
var state_44691__$1 = state_44691;
var statearr_44753_44820 = state_44691__$1;
(statearr_44753_44820[(2)] = null);

(statearr_44753_44820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (9))){
var inst_44583 = (state_44691[(2)]);
var state_44691__$1 = state_44691;
var statearr_44754_44821 = state_44691__$1;
(statearr_44754_44821[(2)] = inst_44583);

(statearr_44754_44821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (5))){
var inst_44554 = (state_44691[(8)]);
var inst_44553 = (state_44691[(9)]);
var inst_44556 = (inst_44554 < inst_44553);
var inst_44557 = inst_44556;
var state_44691__$1 = state_44691;
if(cljs.core.truth_(inst_44557)){
var statearr_44755_44822 = state_44691__$1;
(statearr_44755_44822[(1)] = (7));

} else {
var statearr_44756_44823 = state_44691__$1;
(statearr_44756_44823[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (14))){
var inst_44564 = (state_44691[(22)]);
var inst_44573 = cljs.core.first.call(null,inst_44564);
var inst_44574 = figwheel.client.file_reloading.eval_body.call(null,inst_44573,opts);
var inst_44575 = cljs.core.next.call(null,inst_44564);
var inst_44551 = inst_44575;
var inst_44552 = null;
var inst_44553 = (0);
var inst_44554 = (0);
var state_44691__$1 = (function (){var statearr_44757 = state_44691;
(statearr_44757[(7)] = inst_44551);

(statearr_44757[(8)] = inst_44554);

(statearr_44757[(32)] = inst_44574);

(statearr_44757[(9)] = inst_44553);

(statearr_44757[(10)] = inst_44552);

return statearr_44757;
})();
var statearr_44758_44824 = state_44691__$1;
(statearr_44758_44824[(2)] = null);

(statearr_44758_44824[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (45))){
var state_44691__$1 = state_44691;
var statearr_44759_44825 = state_44691__$1;
(statearr_44759_44825[(2)] = null);

(statearr_44759_44825[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (26))){
var inst_44610 = (state_44691[(26)]);
var inst_44607 = (state_44691[(23)]);
var inst_44612 = (state_44691[(24)]);
var inst_44608 = (state_44691[(25)]);
var inst_44604 = (state_44691[(19)]);
var inst_44627 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_44629 = (function (){var all_files = inst_44604;
var res_SINGLEQUOTE_ = inst_44607;
var res = inst_44608;
var files_not_loaded = inst_44610;
var dependencies_that_loaded = inst_44612;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44610,inst_44607,inst_44612,inst_44608,inst_44604,inst_44627,state_val_44692,c__34735__auto__,map__44536,map__44536__$1,opts,before_jsload,on_jsload,reload_dependents,map__44537,map__44537__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44628){
var map__44760 = p__44628;
var map__44760__$1 = ((((!((map__44760 == null)))?((((map__44760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44760):map__44760);
var namespace = cljs.core.get.call(null,map__44760__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__44760__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44610,inst_44607,inst_44612,inst_44608,inst_44604,inst_44627,state_val_44692,c__34735__auto__,map__44536,map__44536__$1,opts,before_jsload,on_jsload,reload_dependents,map__44537,map__44537__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44630 = cljs.core.map.call(null,inst_44629,inst_44608);
var inst_44631 = cljs.core.pr_str.call(null,inst_44630);
var inst_44632 = figwheel.client.utils.log.call(null,inst_44631);
var inst_44633 = (function (){var all_files = inst_44604;
var res_SINGLEQUOTE_ = inst_44607;
var res = inst_44608;
var files_not_loaded = inst_44610;
var dependencies_that_loaded = inst_44612;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44610,inst_44607,inst_44612,inst_44608,inst_44604,inst_44627,inst_44629,inst_44630,inst_44631,inst_44632,state_val_44692,c__34735__auto__,map__44536,map__44536__$1,opts,before_jsload,on_jsload,reload_dependents,map__44537,map__44537__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44610,inst_44607,inst_44612,inst_44608,inst_44604,inst_44627,inst_44629,inst_44630,inst_44631,inst_44632,state_val_44692,c__34735__auto__,map__44536,map__44536__$1,opts,before_jsload,on_jsload,reload_dependents,map__44537,map__44537__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44634 = setTimeout(inst_44633,(10));
var state_44691__$1 = (function (){var statearr_44762 = state_44691;
(statearr_44762[(33)] = inst_44627);

(statearr_44762[(34)] = inst_44632);

return statearr_44762;
})();
var statearr_44763_44826 = state_44691__$1;
(statearr_44763_44826[(2)] = inst_44634);

(statearr_44763_44826[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (16))){
var state_44691__$1 = state_44691;
var statearr_44764_44827 = state_44691__$1;
(statearr_44764_44827[(2)] = reload_dependents);

(statearr_44764_44827[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (38))){
var inst_44644 = (state_44691[(16)]);
var inst_44662 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44644);
var state_44691__$1 = state_44691;
var statearr_44765_44828 = state_44691__$1;
(statearr_44765_44828[(2)] = inst_44662);

(statearr_44765_44828[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (30))){
var state_44691__$1 = state_44691;
var statearr_44766_44829 = state_44691__$1;
(statearr_44766_44829[(2)] = null);

(statearr_44766_44829[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (10))){
var inst_44564 = (state_44691[(22)]);
var inst_44566 = cljs.core.chunked_seq_QMARK_.call(null,inst_44564);
var state_44691__$1 = state_44691;
if(inst_44566){
var statearr_44767_44830 = state_44691__$1;
(statearr_44767_44830[(1)] = (13));

} else {
var statearr_44768_44831 = state_44691__$1;
(statearr_44768_44831[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (18))){
var inst_44598 = (state_44691[(2)]);
var state_44691__$1 = state_44691;
if(cljs.core.truth_(inst_44598)){
var statearr_44769_44832 = state_44691__$1;
(statearr_44769_44832[(1)] = (19));

} else {
var statearr_44770_44833 = state_44691__$1;
(statearr_44770_44833[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (42))){
var state_44691__$1 = state_44691;
var statearr_44771_44834 = state_44691__$1;
(statearr_44771_44834[(2)] = null);

(statearr_44771_44834[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (37))){
var inst_44657 = (state_44691[(2)]);
var state_44691__$1 = state_44691;
var statearr_44772_44835 = state_44691__$1;
(statearr_44772_44835[(2)] = inst_44657);

(statearr_44772_44835[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (8))){
var inst_44551 = (state_44691[(7)]);
var inst_44564 = (state_44691[(22)]);
var inst_44564__$1 = cljs.core.seq.call(null,inst_44551);
var state_44691__$1 = (function (){var statearr_44773 = state_44691;
(statearr_44773[(22)] = inst_44564__$1);

return statearr_44773;
})();
if(inst_44564__$1){
var statearr_44774_44836 = state_44691__$1;
(statearr_44774_44836[(1)] = (10));

} else {
var statearr_44775_44837 = state_44691__$1;
(statearr_44775_44837[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__34735__auto__,map__44536,map__44536__$1,opts,before_jsload,on_jsload,reload_dependents,map__44537,map__44537__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34712__auto__,c__34735__auto__,map__44536,map__44536__$1,opts,before_jsload,on_jsload,reload_dependents,map__44537,map__44537__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34713__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34713__auto____0 = (function (){
var statearr_44776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44776[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34713__auto__);

(statearr_44776[(1)] = (1));

return statearr_44776;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34713__auto____1 = (function (state_44691){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_44691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e44777){if((e44777 instanceof Object)){
var ex__34716__auto__ = e44777;
var statearr_44778_44838 = state_44691;
(statearr_44778_44838[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44839 = state_44691;
state_44691 = G__44839;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34713__auto__ = function(state_44691){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34713__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34713__auto____1.call(this,state_44691);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34713__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34713__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto__,map__44536,map__44536__$1,opts,before_jsload,on_jsload,reload_dependents,map__44537,map__44537__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34737__auto__ = (function (){var statearr_44779 = f__34736__auto__.call(null);
(statearr_44779[(6)] = c__34735__auto__);

return statearr_44779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto__,map__44536,map__44536__$1,opts,before_jsload,on_jsload,reload_dependents,map__44537,map__44537__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34735__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__44842,link){
var map__44843 = p__44842;
var map__44843__$1 = ((((!((map__44843 == null)))?((((map__44843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44843):map__44843);
var file = cljs.core.get.call(null,map__44843__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5459__auto__ = link.href;
if(cljs.core.truth_(temp__5459__auto__)){
var link_href = temp__5459__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5459__auto__,map__44843,map__44843__$1,file){
return (function (p1__44840_SHARP_,p2__44841_SHARP_){
if(cljs.core._EQ_.call(null,p1__44840_SHARP_,p2__44841_SHARP_)){
return p1__44840_SHARP_;
} else {
return false;
}
});})(link_href,temp__5459__auto__,map__44843,map__44843__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5459__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__44846){
var map__44847 = p__44846;
var map__44847__$1 = ((((!((map__44847 == null)))?((((map__44847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44847):map__44847);
var match_length = cljs.core.get.call(null,map__44847__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__44847__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__44845_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__44845_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5459__auto__)){
var res = temp__5459__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__44849_SHARP_,p2__44850_SHARP_){
return cljs.core.assoc.call(null,p1__44849_SHARP_,cljs.core.get.call(null,p2__44850_SHARP_,key),p2__44850_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5457__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5457__auto__)){
var link = temp__5457__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5457__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5457__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_44851 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_44851);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_44851);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__44852,p__44853){
var map__44854 = p__44852;
var map__44854__$1 = ((((!((map__44854 == null)))?((((map__44854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44854):map__44854);
var on_cssload = cljs.core.get.call(null,map__44854__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__44855 = p__44853;
var map__44855__$1 = ((((!((map__44855 == null)))?((((map__44855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44855.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44855):map__44855);
var files_msg = map__44855__$1;
var files = cljs.core.get.call(null,map__44855__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5459__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5459__auto__)){
var f_datas = temp__5459__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1505885205019
