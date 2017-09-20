// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__30718__auto__,writer__30719__auto__,opt__30720__auto__){
return cljs.core._write.call(null,writer__30719__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39479 = arguments.length;
var i__31325__auto___39480 = (0);
while(true){
if((i__31325__auto___39480 < len__31324__auto___39479)){
args__31331__auto__.push((arguments[i__31325__auto___39480]));

var G__39481 = (i__31325__auto___39480 + (1));
i__31325__auto___39480 = G__39481;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq39478){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39478));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39483 = arguments.length;
var i__31325__auto___39484 = (0);
while(true){
if((i__31325__auto___39484 < len__31324__auto___39483)){
args__31331__auto__.push((arguments[i__31325__auto___39484]));

var G__39485 = (i__31325__auto___39484 + (1));
i__31325__auto___39484 = G__39485;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq39482){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39482));
});

var g_QMARK__39486 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_39487 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__39486){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__39486))
,null));
var mkg_39488 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__39486,g_39487){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__39486,g_39487))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__39486,g_39487,mkg_39488){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__39486).call(null,x);
});})(g_QMARK__39486,g_39487,mkg_39488))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__39486,g_39487,mkg_39488){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_39488).call(null,gfn);
});})(g_QMARK__39486,g_39487,mkg_39488))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__39486,g_39487,mkg_39488){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_39487).call(null,generator);
});})(g_QMARK__39486,g_39487,mkg_39488))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__31427__auto___39508 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__31427__auto___39508){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39509 = arguments.length;
var i__31325__auto___39510 = (0);
while(true){
if((i__31325__auto___39510 < len__31324__auto___39509)){
args__31331__auto__.push((arguments[i__31325__auto___39510]));

var G__39511 = (i__31325__auto___39510 + (1));
i__31325__auto___39510 = G__39511;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31427__auto___39508))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31427__auto___39508){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31427__auto___39508),args);
});})(g__31427__auto___39508))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__31427__auto___39508){
return (function (seq39489){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39489));
});})(g__31427__auto___39508))
;


var g__31427__auto___39512 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__31427__auto___39512){
return (function cljs$spec$gen$alpha$list(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39513 = arguments.length;
var i__31325__auto___39514 = (0);
while(true){
if((i__31325__auto___39514 < len__31324__auto___39513)){
args__31331__auto__.push((arguments[i__31325__auto___39514]));

var G__39515 = (i__31325__auto___39514 + (1));
i__31325__auto___39514 = G__39515;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31427__auto___39512))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31427__auto___39512){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31427__auto___39512),args);
});})(g__31427__auto___39512))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__31427__auto___39512){
return (function (seq39490){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39490));
});})(g__31427__auto___39512))
;


var g__31427__auto___39516 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__31427__auto___39516){
return (function cljs$spec$gen$alpha$map(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39517 = arguments.length;
var i__31325__auto___39518 = (0);
while(true){
if((i__31325__auto___39518 < len__31324__auto___39517)){
args__31331__auto__.push((arguments[i__31325__auto___39518]));

var G__39519 = (i__31325__auto___39518 + (1));
i__31325__auto___39518 = G__39519;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31427__auto___39516))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31427__auto___39516){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31427__auto___39516),args);
});})(g__31427__auto___39516))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__31427__auto___39516){
return (function (seq39491){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39491));
});})(g__31427__auto___39516))
;


var g__31427__auto___39520 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__31427__auto___39520){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39521 = arguments.length;
var i__31325__auto___39522 = (0);
while(true){
if((i__31325__auto___39522 < len__31324__auto___39521)){
args__31331__auto__.push((arguments[i__31325__auto___39522]));

var G__39523 = (i__31325__auto___39522 + (1));
i__31325__auto___39522 = G__39523;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31427__auto___39520))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31427__auto___39520){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31427__auto___39520),args);
});})(g__31427__auto___39520))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__31427__auto___39520){
return (function (seq39492){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39492));
});})(g__31427__auto___39520))
;


var g__31427__auto___39524 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__31427__auto___39524){
return (function cljs$spec$gen$alpha$set(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39525 = arguments.length;
var i__31325__auto___39526 = (0);
while(true){
if((i__31325__auto___39526 < len__31324__auto___39525)){
args__31331__auto__.push((arguments[i__31325__auto___39526]));

var G__39527 = (i__31325__auto___39526 + (1));
i__31325__auto___39526 = G__39527;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31427__auto___39524))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31427__auto___39524){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31427__auto___39524),args);
});})(g__31427__auto___39524))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__31427__auto___39524){
return (function (seq39493){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39493));
});})(g__31427__auto___39524))
;


var g__31427__auto___39528 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__31427__auto___39528){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39529 = arguments.length;
var i__31325__auto___39530 = (0);
while(true){
if((i__31325__auto___39530 < len__31324__auto___39529)){
args__31331__auto__.push((arguments[i__31325__auto___39530]));

var G__39531 = (i__31325__auto___39530 + (1));
i__31325__auto___39530 = G__39531;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31427__auto___39528))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31427__auto___39528){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31427__auto___39528),args);
});})(g__31427__auto___39528))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__31427__auto___39528){
return (function (seq39494){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39494));
});})(g__31427__auto___39528))
;


var g__31427__auto___39532 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__31427__auto___39532){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39533 = arguments.length;
var i__31325__auto___39534 = (0);
while(true){
if((i__31325__auto___39534 < len__31324__auto___39533)){
args__31331__auto__.push((arguments[i__31325__auto___39534]));

var G__39535 = (i__31325__auto___39534 + (1));
i__31325__auto___39534 = G__39535;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31427__auto___39532))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31427__auto___39532){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31427__auto___39532),args);
});})(g__31427__auto___39532))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__31427__auto___39532){
return (function (seq39495){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39495));
});})(g__31427__auto___39532))
;


var g__31427__auto___39536 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__31427__auto___39536){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39537 = arguments.length;
var i__31325__auto___39538 = (0);
while(true){
if((i__31325__auto___39538 < len__31324__auto___39537)){
args__31331__auto__.push((arguments[i__31325__auto___39538]));

var G__39539 = (i__31325__auto___39538 + (1));
i__31325__auto___39538 = G__39539;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31427__auto___39536))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31427__auto___39536){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31427__auto___39536),args);
});})(g__31427__auto___39536))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__31427__auto___39536){
return (function (seq39496){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39496));
});})(g__31427__auto___39536))
;


var g__31427__auto___39540 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__31427__auto___39540){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39541 = arguments.length;
var i__31325__auto___39542 = (0);
while(true){
if((i__31325__auto___39542 < len__31324__auto___39541)){
args__31331__auto__.push((arguments[i__31325__auto___39542]));

var G__39543 = (i__31325__auto___39542 + (1));
i__31325__auto___39542 = G__39543;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31427__auto___39540))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31427__auto___39540){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31427__auto___39540),args);
});})(g__31427__auto___39540))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__31427__auto___39540){
return (function (seq39497){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39497));
});})(g__31427__auto___39540))
;


var g__31427__auto___39544 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__31427__auto___39544){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39545 = arguments.length;
var i__31325__auto___39546 = (0);
while(true){
if((i__31325__auto___39546 < len__31324__auto___39545)){
args__31331__auto__.push((arguments[i__31325__auto___39546]));

var G__39547 = (i__31325__auto___39546 + (1));
i__31325__auto___39546 = G__39547;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31427__auto___39544))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31427__auto___39544){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31427__auto___39544),args);
});})(g__31427__auto___39544))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__31427__auto___39544){
return (function (seq39498){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39498));
});})(g__31427__auto___39544))
;


var g__31427__auto___39548 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__31427__auto___39548){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39549 = arguments.length;
var i__31325__auto___39550 = (0);
while(true){
if((i__31325__auto___39550 < len__31324__auto___39549)){
args__31331__auto__.push((arguments[i__31325__auto___39550]));

var G__39551 = (i__31325__auto___39550 + (1));
i__31325__auto___39550 = G__39551;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31427__auto___39548))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31427__auto___39548){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31427__auto___39548),args);
});})(g__31427__auto___39548))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__31427__auto___39548){
return (function (seq39499){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39499));
});})(g__31427__auto___39548))
;


var g__31427__auto___39552 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__31427__auto___39552){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39553 = arguments.length;
var i__31325__auto___39554 = (0);
while(true){
if((i__31325__auto___39554 < len__31324__auto___39553)){
args__31331__auto__.push((arguments[i__31325__auto___39554]));

var G__39555 = (i__31325__auto___39554 + (1));
i__31325__auto___39554 = G__39555;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31427__auto___39552))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31427__auto___39552){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31427__auto___39552),args);
});})(g__31427__auto___39552))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__31427__auto___39552){
return (function (seq39500){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39500));
});})(g__31427__auto___39552))
;


var g__31427__auto___39556 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__31427__auto___39556){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39557 = arguments.length;
var i__31325__auto___39558 = (0);
while(true){
if((i__31325__auto___39558 < len__31324__auto___39557)){
args__31331__auto__.push((arguments[i__31325__auto___39558]));

var G__39559 = (i__31325__auto___39558 + (1));
i__31325__auto___39558 = G__39559;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31427__auto___39556))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31427__auto___39556){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31427__auto___39556),args);
});})(g__31427__auto___39556))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__31427__auto___39556){
return (function (seq39501){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39501));
});})(g__31427__auto___39556))
;


var g__31427__auto___39560 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__31427__auto___39560){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39561 = arguments.length;
var i__31325__auto___39562 = (0);
while(true){
if((i__31325__auto___39562 < len__31324__auto___39561)){
args__31331__auto__.push((arguments[i__31325__auto___39562]));

var G__39563 = (i__31325__auto___39562 + (1));
i__31325__auto___39562 = G__39563;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31427__auto___39560))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31427__auto___39560){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31427__auto___39560),args);
});})(g__31427__auto___39560))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__31427__auto___39560){
return (function (seq39502){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39502));
});})(g__31427__auto___39560))
;


var g__31427__auto___39564 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__31427__auto___39564){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39565 = arguments.length;
var i__31325__auto___39566 = (0);
while(true){
if((i__31325__auto___39566 < len__31324__auto___39565)){
args__31331__auto__.push((arguments[i__31325__auto___39566]));

var G__39567 = (i__31325__auto___39566 + (1));
i__31325__auto___39566 = G__39567;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31427__auto___39564))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31427__auto___39564){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31427__auto___39564),args);
});})(g__31427__auto___39564))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__31427__auto___39564){
return (function (seq39503){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39503));
});})(g__31427__auto___39564))
;


var g__31427__auto___39568 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__31427__auto___39568){
return (function cljs$spec$gen$alpha$return(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39569 = arguments.length;
var i__31325__auto___39570 = (0);
while(true){
if((i__31325__auto___39570 < len__31324__auto___39569)){
args__31331__auto__.push((arguments[i__31325__auto___39570]));

var G__39571 = (i__31325__auto___39570 + (1));
i__31325__auto___39570 = G__39571;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31427__auto___39568))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31427__auto___39568){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31427__auto___39568),args);
});})(g__31427__auto___39568))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__31427__auto___39568){
return (function (seq39504){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39504));
});})(g__31427__auto___39568))
;


var g__31427__auto___39572 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__31427__auto___39572){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39573 = arguments.length;
var i__31325__auto___39574 = (0);
while(true){
if((i__31325__auto___39574 < len__31324__auto___39573)){
args__31331__auto__.push((arguments[i__31325__auto___39574]));

var G__39575 = (i__31325__auto___39574 + (1));
i__31325__auto___39574 = G__39575;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31427__auto___39572))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31427__auto___39572){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31427__auto___39572),args);
});})(g__31427__auto___39572))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31427__auto___39572){
return (function (seq39505){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39505));
});})(g__31427__auto___39572))
;


var g__31427__auto___39576 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__31427__auto___39576){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39577 = arguments.length;
var i__31325__auto___39578 = (0);
while(true){
if((i__31325__auto___39578 < len__31324__auto___39577)){
args__31331__auto__.push((arguments[i__31325__auto___39578]));

var G__39579 = (i__31325__auto___39578 + (1));
i__31325__auto___39578 = G__39579;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31427__auto___39576))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31427__auto___39576){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31427__auto___39576),args);
});})(g__31427__auto___39576))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__31427__auto___39576){
return (function (seq39506){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39506));
});})(g__31427__auto___39576))
;


var g__31427__auto___39580 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__31427__auto___39580){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39581 = arguments.length;
var i__31325__auto___39582 = (0);
while(true){
if((i__31325__auto___39582 < len__31324__auto___39581)){
args__31331__auto__.push((arguments[i__31325__auto___39582]));

var G__39583 = (i__31325__auto___39582 + (1));
i__31325__auto___39582 = G__39583;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31427__auto___39580))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31427__auto___39580){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31427__auto___39580),args);
});})(g__31427__auto___39580))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__31427__auto___39580){
return (function (seq39507){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39507));
});})(g__31427__auto___39580))
;

var g__31440__auto___39605 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__31440__auto___39605){
return (function cljs$spec$gen$alpha$any(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39606 = arguments.length;
var i__31325__auto___39607 = (0);
while(true){
if((i__31325__auto___39607 < len__31324__auto___39606)){
args__31331__auto__.push((arguments[i__31325__auto___39607]));

var G__39608 = (i__31325__auto___39607 + (1));
i__31325__auto___39607 = G__39608;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39605))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39605){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39605);
});})(g__31440__auto___39605))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__31440__auto___39605){
return (function (seq39584){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39584));
});})(g__31440__auto___39605))
;


var g__31440__auto___39609 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__31440__auto___39609){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39610 = arguments.length;
var i__31325__auto___39611 = (0);
while(true){
if((i__31325__auto___39611 < len__31324__auto___39610)){
args__31331__auto__.push((arguments[i__31325__auto___39611]));

var G__39612 = (i__31325__auto___39611 + (1));
i__31325__auto___39611 = G__39612;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39609))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39609){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39609);
});})(g__31440__auto___39609))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__31440__auto___39609){
return (function (seq39585){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39585));
});})(g__31440__auto___39609))
;


var g__31440__auto___39613 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__31440__auto___39613){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39614 = arguments.length;
var i__31325__auto___39615 = (0);
while(true){
if((i__31325__auto___39615 < len__31324__auto___39614)){
args__31331__auto__.push((arguments[i__31325__auto___39615]));

var G__39616 = (i__31325__auto___39615 + (1));
i__31325__auto___39615 = G__39616;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39613))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39613){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39613);
});})(g__31440__auto___39613))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__31440__auto___39613){
return (function (seq39586){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39586));
});})(g__31440__auto___39613))
;


var g__31440__auto___39617 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__31440__auto___39617){
return (function cljs$spec$gen$alpha$char(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39618 = arguments.length;
var i__31325__auto___39619 = (0);
while(true){
if((i__31325__auto___39619 < len__31324__auto___39618)){
args__31331__auto__.push((arguments[i__31325__auto___39619]));

var G__39620 = (i__31325__auto___39619 + (1));
i__31325__auto___39619 = G__39620;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39617))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39617){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39617);
});})(g__31440__auto___39617))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__31440__auto___39617){
return (function (seq39587){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39587));
});})(g__31440__auto___39617))
;


var g__31440__auto___39621 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__31440__auto___39621){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39622 = arguments.length;
var i__31325__auto___39623 = (0);
while(true){
if((i__31325__auto___39623 < len__31324__auto___39622)){
args__31331__auto__.push((arguments[i__31325__auto___39623]));

var G__39624 = (i__31325__auto___39623 + (1));
i__31325__auto___39623 = G__39624;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39621))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39621){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39621);
});})(g__31440__auto___39621))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__31440__auto___39621){
return (function (seq39588){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39588));
});})(g__31440__auto___39621))
;


var g__31440__auto___39625 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__31440__auto___39625){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39626 = arguments.length;
var i__31325__auto___39627 = (0);
while(true){
if((i__31325__auto___39627 < len__31324__auto___39626)){
args__31331__auto__.push((arguments[i__31325__auto___39627]));

var G__39628 = (i__31325__auto___39627 + (1));
i__31325__auto___39627 = G__39628;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39625))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39625){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39625);
});})(g__31440__auto___39625))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__31440__auto___39625){
return (function (seq39589){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39589));
});})(g__31440__auto___39625))
;


var g__31440__auto___39629 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__31440__auto___39629){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39630 = arguments.length;
var i__31325__auto___39631 = (0);
while(true){
if((i__31325__auto___39631 < len__31324__auto___39630)){
args__31331__auto__.push((arguments[i__31325__auto___39631]));

var G__39632 = (i__31325__auto___39631 + (1));
i__31325__auto___39631 = G__39632;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39629))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39629){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39629);
});})(g__31440__auto___39629))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__31440__auto___39629){
return (function (seq39590){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39590));
});})(g__31440__auto___39629))
;


var g__31440__auto___39633 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__31440__auto___39633){
return (function cljs$spec$gen$alpha$double(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39634 = arguments.length;
var i__31325__auto___39635 = (0);
while(true){
if((i__31325__auto___39635 < len__31324__auto___39634)){
args__31331__auto__.push((arguments[i__31325__auto___39635]));

var G__39636 = (i__31325__auto___39635 + (1));
i__31325__auto___39635 = G__39636;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39633))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39633){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39633);
});})(g__31440__auto___39633))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__31440__auto___39633){
return (function (seq39591){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39591));
});})(g__31440__auto___39633))
;


var g__31440__auto___39637 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__31440__auto___39637){
return (function cljs$spec$gen$alpha$int(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39638 = arguments.length;
var i__31325__auto___39639 = (0);
while(true){
if((i__31325__auto___39639 < len__31324__auto___39638)){
args__31331__auto__.push((arguments[i__31325__auto___39639]));

var G__39640 = (i__31325__auto___39639 + (1));
i__31325__auto___39639 = G__39640;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39637))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39637){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39637);
});})(g__31440__auto___39637))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__31440__auto___39637){
return (function (seq39592){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39592));
});})(g__31440__auto___39637))
;


var g__31440__auto___39641 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__31440__auto___39641){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39642 = arguments.length;
var i__31325__auto___39643 = (0);
while(true){
if((i__31325__auto___39643 < len__31324__auto___39642)){
args__31331__auto__.push((arguments[i__31325__auto___39643]));

var G__39644 = (i__31325__auto___39643 + (1));
i__31325__auto___39643 = G__39644;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39641))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39641){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39641);
});})(g__31440__auto___39641))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__31440__auto___39641){
return (function (seq39593){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39593));
});})(g__31440__auto___39641))
;


var g__31440__auto___39645 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__31440__auto___39645){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39646 = arguments.length;
var i__31325__auto___39647 = (0);
while(true){
if((i__31325__auto___39647 < len__31324__auto___39646)){
args__31331__auto__.push((arguments[i__31325__auto___39647]));

var G__39648 = (i__31325__auto___39647 + (1));
i__31325__auto___39647 = G__39648;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39645))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39645){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39645);
});})(g__31440__auto___39645))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__31440__auto___39645){
return (function (seq39594){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39594));
});})(g__31440__auto___39645))
;


var g__31440__auto___39649 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__31440__auto___39649){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39650 = arguments.length;
var i__31325__auto___39651 = (0);
while(true){
if((i__31325__auto___39651 < len__31324__auto___39650)){
args__31331__auto__.push((arguments[i__31325__auto___39651]));

var G__39652 = (i__31325__auto___39651 + (1));
i__31325__auto___39651 = G__39652;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39649))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39649){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39649);
});})(g__31440__auto___39649))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__31440__auto___39649){
return (function (seq39595){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39595));
});})(g__31440__auto___39649))
;


var g__31440__auto___39653 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__31440__auto___39653){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39654 = arguments.length;
var i__31325__auto___39655 = (0);
while(true){
if((i__31325__auto___39655 < len__31324__auto___39654)){
args__31331__auto__.push((arguments[i__31325__auto___39655]));

var G__39656 = (i__31325__auto___39655 + (1));
i__31325__auto___39655 = G__39656;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39653))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39653){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39653);
});})(g__31440__auto___39653))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__31440__auto___39653){
return (function (seq39596){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39596));
});})(g__31440__auto___39653))
;


var g__31440__auto___39657 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__31440__auto___39657){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39658 = arguments.length;
var i__31325__auto___39659 = (0);
while(true){
if((i__31325__auto___39659 < len__31324__auto___39658)){
args__31331__auto__.push((arguments[i__31325__auto___39659]));

var G__39660 = (i__31325__auto___39659 + (1));
i__31325__auto___39659 = G__39660;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39657))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39657){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39657);
});})(g__31440__auto___39657))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__31440__auto___39657){
return (function (seq39597){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39597));
});})(g__31440__auto___39657))
;


var g__31440__auto___39661 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__31440__auto___39661){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39662 = arguments.length;
var i__31325__auto___39663 = (0);
while(true){
if((i__31325__auto___39663 < len__31324__auto___39662)){
args__31331__auto__.push((arguments[i__31325__auto___39663]));

var G__39664 = (i__31325__auto___39663 + (1));
i__31325__auto___39663 = G__39664;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39661))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39661){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39661);
});})(g__31440__auto___39661))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__31440__auto___39661){
return (function (seq39598){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39598));
});})(g__31440__auto___39661))
;


var g__31440__auto___39665 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__31440__auto___39665){
return (function cljs$spec$gen$alpha$string(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39666 = arguments.length;
var i__31325__auto___39667 = (0);
while(true){
if((i__31325__auto___39667 < len__31324__auto___39666)){
args__31331__auto__.push((arguments[i__31325__auto___39667]));

var G__39668 = (i__31325__auto___39667 + (1));
i__31325__auto___39667 = G__39668;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39665))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39665){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39665);
});})(g__31440__auto___39665))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__31440__auto___39665){
return (function (seq39599){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39599));
});})(g__31440__auto___39665))
;


var g__31440__auto___39669 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__31440__auto___39669){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39670 = arguments.length;
var i__31325__auto___39671 = (0);
while(true){
if((i__31325__auto___39671 < len__31324__auto___39670)){
args__31331__auto__.push((arguments[i__31325__auto___39671]));

var G__39672 = (i__31325__auto___39671 + (1));
i__31325__auto___39671 = G__39672;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39669))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39669){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39669);
});})(g__31440__auto___39669))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__31440__auto___39669){
return (function (seq39600){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39600));
});})(g__31440__auto___39669))
;


var g__31440__auto___39673 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__31440__auto___39673){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39674 = arguments.length;
var i__31325__auto___39675 = (0);
while(true){
if((i__31325__auto___39675 < len__31324__auto___39674)){
args__31331__auto__.push((arguments[i__31325__auto___39675]));

var G__39676 = (i__31325__auto___39675 + (1));
i__31325__auto___39675 = G__39676;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39673))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39673){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39673);
});})(g__31440__auto___39673))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__31440__auto___39673){
return (function (seq39601){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39601));
});})(g__31440__auto___39673))
;


var g__31440__auto___39677 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__31440__auto___39677){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39678 = arguments.length;
var i__31325__auto___39679 = (0);
while(true){
if((i__31325__auto___39679 < len__31324__auto___39678)){
args__31331__auto__.push((arguments[i__31325__auto___39679]));

var G__39680 = (i__31325__auto___39679 + (1));
i__31325__auto___39679 = G__39680;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39677))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39677){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39677);
});})(g__31440__auto___39677))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__31440__auto___39677){
return (function (seq39602){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39602));
});})(g__31440__auto___39677))
;


var g__31440__auto___39681 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__31440__auto___39681){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39682 = arguments.length;
var i__31325__auto___39683 = (0);
while(true){
if((i__31325__auto___39683 < len__31324__auto___39682)){
args__31331__auto__.push((arguments[i__31325__auto___39683]));

var G__39684 = (i__31325__auto___39683 + (1));
i__31325__auto___39683 = G__39684;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39681))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39681){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39681);
});})(g__31440__auto___39681))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__31440__auto___39681){
return (function (seq39603){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39603));
});})(g__31440__auto___39681))
;


var g__31440__auto___39685 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__31440__auto___39685){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39686 = arguments.length;
var i__31325__auto___39687 = (0);
while(true){
if((i__31325__auto___39687 < len__31324__auto___39686)){
args__31331__auto__.push((arguments[i__31325__auto___39687]));

var G__39688 = (i__31325__auto___39687 + (1));
i__31325__auto___39687 = G__39688;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});})(g__31440__auto___39685))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31440__auto___39685){
return (function (args){
return cljs.core.deref.call(null,g__31440__auto___39685);
});})(g__31440__auto___39685))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__31440__auto___39685){
return (function (seq39604){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39604));
});})(g__31440__auto___39685))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__31331__auto__ = [];
var len__31324__auto___39691 = arguments.length;
var i__31325__auto___39692 = (0);
while(true){
if((i__31325__auto___39692 < len__31324__auto___39691)){
args__31331__auto__.push((arguments[i__31325__auto___39692]));

var G__39693 = (i__31325__auto___39692 + (1));
i__31325__auto___39692 = G__39693;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__39689_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__39689_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq39690){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39690));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__39694_SHARP_){
return (new Date(p1__39694_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1505885198464
