// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__41252 = arguments.length;
switch (G__41252) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async41253 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41253 = (function (f,blockable,meta41254){
this.f = f;
this.blockable = blockable;
this.meta41254 = meta41254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41255,meta41254__$1){
var self__ = this;
var _41255__$1 = this;
return (new cljs.core.async.t_cljs$core$async41253(self__.f,self__.blockable,meta41254__$1));
});

cljs.core.async.t_cljs$core$async41253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41255){
var self__ = this;
var _41255__$1 = this;
return self__.meta41254;
});

cljs.core.async.t_cljs$core$async41253.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41253.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41253.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async41253.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async41253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41254","meta41254",461354807,null)], null);
});

cljs.core.async.t_cljs$core$async41253.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41253";

cljs.core.async.t_cljs$core$async41253.cljs$lang$ctorPrWriter = (function (this__30718__auto__,writer__30719__auto__,opt__30720__auto__){
return cljs.core._write.call(null,writer__30719__auto__,"cljs.core.async/t_cljs$core$async41253");
});

cljs.core.async.__GT_t_cljs$core$async41253 = (function cljs$core$async$__GT_t_cljs$core$async41253(f__$1,blockable__$1,meta41254){
return (new cljs.core.async.t_cljs$core$async41253(f__$1,blockable__$1,meta41254));
});

}

return (new cljs.core.async.t_cljs$core$async41253(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__41259 = arguments.length;
switch (G__41259) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__41262 = arguments.length;
switch (G__41262) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__41265 = arguments.length;
switch (G__41265) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_41267 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_41267);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_41267,ret){
return (function (){
return fn1.call(null,val_41267);
});})(val_41267,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__41269 = arguments.length;
switch (G__41269) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5457__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5457__auto__)){
var ret = temp__5457__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5457__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5457__auto__)){
var retb = temp__5457__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5457__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5457__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31090__auto___41271 = n;
var x_41272 = (0);
while(true){
if((x_41272 < n__31090__auto___41271)){
(a[x_41272] = (0));

var G__41273 = (x_41272 + (1));
x_41272 = G__41273;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__41274 = (i + (1));
i = G__41274;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async41275 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41275 = (function (flag,meta41276){
this.flag = flag;
this.meta41276 = meta41276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_41277,meta41276__$1){
var self__ = this;
var _41277__$1 = this;
return (new cljs.core.async.t_cljs$core$async41275(self__.flag,meta41276__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async41275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_41277){
var self__ = this;
var _41277__$1 = this;
return self__.meta41276;
});})(flag))
;

cljs.core.async.t_cljs$core$async41275.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41275.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async41275.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41275.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41275.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41276","meta41276",-463695499,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async41275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41275";

cljs.core.async.t_cljs$core$async41275.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30718__auto__,writer__30719__auto__,opt__30720__auto__){
return cljs.core._write.call(null,writer__30719__auto__,"cljs.core.async/t_cljs$core$async41275");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async41275 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async41275(flag__$1,meta41276){
return (new cljs.core.async.t_cljs$core$async41275(flag__$1,meta41276));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async41275(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async41278 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41278 = (function (flag,cb,meta41279){
this.flag = flag;
this.cb = cb;
this.meta41279 = meta41279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41280,meta41279__$1){
var self__ = this;
var _41280__$1 = this;
return (new cljs.core.async.t_cljs$core$async41278(self__.flag,self__.cb,meta41279__$1));
});

cljs.core.async.t_cljs$core$async41278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41280){
var self__ = this;
var _41280__$1 = this;
return self__.meta41279;
});

cljs.core.async.t_cljs$core$async41278.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41278.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async41278.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41278.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async41278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta41279","meta41279",163379503,null)], null);
});

cljs.core.async.t_cljs$core$async41278.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41278";

cljs.core.async.t_cljs$core$async41278.cljs$lang$ctorPrWriter = (function (this__30718__auto__,writer__30719__auto__,opt__30720__auto__){
return cljs.core._write.call(null,writer__30719__auto__,"cljs.core.async/t_cljs$core$async41278");
});

cljs.core.async.__GT_t_cljs$core$async41278 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async41278(flag__$1,cb__$1,meta41279){
return (new cljs.core.async.t_cljs$core$async41278(flag__$1,cb__$1,meta41279));
});

}

return (new cljs.core.async.t_cljs$core$async41278(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41281_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41281_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41282_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41282_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30047__auto__ = wport;
if(cljs.core.truth_(or__30047__auto__)){
return or__30047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__41283 = (i + (1));
i = G__41283;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30047__auto__ = ret;
if(cljs.core.truth_(or__30047__auto__)){
return or__30047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5459__auto__ = (function (){var and__30035__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30035__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30035__auto__;
}
})();
if(cljs.core.truth_(temp__5459__auto__)){
var got = temp__5459__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__31331__auto__ = [];
var len__31324__auto___41289 = arguments.length;
var i__31325__auto___41290 = (0);
while(true){
if((i__31325__auto___41290 < len__31324__auto___41289)){
args__31331__auto__.push((arguments[i__31325__auto___41290]));

var G__41291 = (i__31325__auto___41290 + (1));
i__31325__auto___41290 = G__41291;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((1) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31332__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__41286){
var map__41287 = p__41286;
var map__41287__$1 = ((((!((map__41287 == null)))?((((map__41287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41287):map__41287);
var opts = map__41287__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq41284){
var G__41285 = cljs.core.first.call(null,seq41284);
var seq41284__$1 = cljs.core.next.call(null,seq41284);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41285,seq41284__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__41293 = arguments.length;
switch (G__41293) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34735__auto___41339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto___41339){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto___41339){
return (function (state_41317){
var state_val_41318 = (state_41317[(1)]);
if((state_val_41318 === (7))){
var inst_41313 = (state_41317[(2)]);
var state_41317__$1 = state_41317;
var statearr_41319_41340 = state_41317__$1;
(statearr_41319_41340[(2)] = inst_41313);

(statearr_41319_41340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41318 === (1))){
var state_41317__$1 = state_41317;
var statearr_41320_41341 = state_41317__$1;
(statearr_41320_41341[(2)] = null);

(statearr_41320_41341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41318 === (4))){
var inst_41296 = (state_41317[(7)]);
var inst_41296__$1 = (state_41317[(2)]);
var inst_41297 = (inst_41296__$1 == null);
var state_41317__$1 = (function (){var statearr_41321 = state_41317;
(statearr_41321[(7)] = inst_41296__$1);

return statearr_41321;
})();
if(cljs.core.truth_(inst_41297)){
var statearr_41322_41342 = state_41317__$1;
(statearr_41322_41342[(1)] = (5));

} else {
var statearr_41323_41343 = state_41317__$1;
(statearr_41323_41343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41318 === (13))){
var state_41317__$1 = state_41317;
var statearr_41324_41344 = state_41317__$1;
(statearr_41324_41344[(2)] = null);

(statearr_41324_41344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41318 === (6))){
var inst_41296 = (state_41317[(7)]);
var state_41317__$1 = state_41317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41317__$1,(11),to,inst_41296);
} else {
if((state_val_41318 === (3))){
var inst_41315 = (state_41317[(2)]);
var state_41317__$1 = state_41317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41317__$1,inst_41315);
} else {
if((state_val_41318 === (12))){
var state_41317__$1 = state_41317;
var statearr_41325_41345 = state_41317__$1;
(statearr_41325_41345[(2)] = null);

(statearr_41325_41345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41318 === (2))){
var state_41317__$1 = state_41317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41317__$1,(4),from);
} else {
if((state_val_41318 === (11))){
var inst_41306 = (state_41317[(2)]);
var state_41317__$1 = state_41317;
if(cljs.core.truth_(inst_41306)){
var statearr_41326_41346 = state_41317__$1;
(statearr_41326_41346[(1)] = (12));

} else {
var statearr_41327_41347 = state_41317__$1;
(statearr_41327_41347[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41318 === (9))){
var state_41317__$1 = state_41317;
var statearr_41328_41348 = state_41317__$1;
(statearr_41328_41348[(2)] = null);

(statearr_41328_41348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41318 === (5))){
var state_41317__$1 = state_41317;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41329_41349 = state_41317__$1;
(statearr_41329_41349[(1)] = (8));

} else {
var statearr_41330_41350 = state_41317__$1;
(statearr_41330_41350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41318 === (14))){
var inst_41311 = (state_41317[(2)]);
var state_41317__$1 = state_41317;
var statearr_41331_41351 = state_41317__$1;
(statearr_41331_41351[(2)] = inst_41311);

(statearr_41331_41351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41318 === (10))){
var inst_41303 = (state_41317[(2)]);
var state_41317__$1 = state_41317;
var statearr_41332_41352 = state_41317__$1;
(statearr_41332_41352[(2)] = inst_41303);

(statearr_41332_41352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41318 === (8))){
var inst_41300 = cljs.core.async.close_BANG_.call(null,to);
var state_41317__$1 = state_41317;
var statearr_41333_41353 = state_41317__$1;
(statearr_41333_41353[(2)] = inst_41300);

(statearr_41333_41353[(1)] = (10));


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
});})(c__34735__auto___41339))
;
return ((function (switch__34712__auto__,c__34735__auto___41339){
return (function() {
var cljs$core$async$state_machine__34713__auto__ = null;
var cljs$core$async$state_machine__34713__auto____0 = (function (){
var statearr_41334 = [null,null,null,null,null,null,null,null];
(statearr_41334[(0)] = cljs$core$async$state_machine__34713__auto__);

(statearr_41334[(1)] = (1));

return statearr_41334;
});
var cljs$core$async$state_machine__34713__auto____1 = (function (state_41317){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_41317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e41335){if((e41335 instanceof Object)){
var ex__34716__auto__ = e41335;
var statearr_41336_41354 = state_41317;
(statearr_41336_41354[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41355 = state_41317;
state_41317 = G__41355;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$state_machine__34713__auto__ = function(state_41317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34713__auto____1.call(this,state_41317);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34713__auto____0;
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34713__auto____1;
return cljs$core$async$state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto___41339))
})();
var state__34737__auto__ = (function (){var statearr_41337 = f__34736__auto__.call(null);
(statearr_41337[(6)] = c__34735__auto___41339);

return statearr_41337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto___41339))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__41356){
var vec__41357 = p__41356;
var v = cljs.core.nth.call(null,vec__41357,(0),null);
var p = cljs.core.nth.call(null,vec__41357,(1),null);
var job = vec__41357;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34735__auto___41528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto___41528,res,vec__41357,v,p,job,jobs,results){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto___41528,res,vec__41357,v,p,job,jobs,results){
return (function (state_41364){
var state_val_41365 = (state_41364[(1)]);
if((state_val_41365 === (1))){
var state_41364__$1 = state_41364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41364__$1,(2),res,v);
} else {
if((state_val_41365 === (2))){
var inst_41361 = (state_41364[(2)]);
var inst_41362 = cljs.core.async.close_BANG_.call(null,res);
var state_41364__$1 = (function (){var statearr_41366 = state_41364;
(statearr_41366[(7)] = inst_41361);

return statearr_41366;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41364__$1,inst_41362);
} else {
return null;
}
}
});})(c__34735__auto___41528,res,vec__41357,v,p,job,jobs,results))
;
return ((function (switch__34712__auto__,c__34735__auto___41528,res,vec__41357,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____0 = (function (){
var statearr_41367 = [null,null,null,null,null,null,null,null];
(statearr_41367[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__);

(statearr_41367[(1)] = (1));

return statearr_41367;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____1 = (function (state_41364){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_41364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e41368){if((e41368 instanceof Object)){
var ex__34716__auto__ = e41368;
var statearr_41369_41529 = state_41364;
(statearr_41369_41529[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41530 = state_41364;
state_41364 = G__41530;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__ = function(state_41364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____1.call(this,state_41364);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto___41528,res,vec__41357,v,p,job,jobs,results))
})();
var state__34737__auto__ = (function (){var statearr_41370 = f__34736__auto__.call(null);
(statearr_41370[(6)] = c__34735__auto___41528);

return statearr_41370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto___41528,res,vec__41357,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41371){
var vec__41372 = p__41371;
var v = cljs.core.nth.call(null,vec__41372,(0),null);
var p = cljs.core.nth.call(null,vec__41372,(1),null);
var job = vec__41372;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31090__auto___41531 = n;
var __41532 = (0);
while(true){
if((__41532 < n__31090__auto___41531)){
var G__41375_41533 = type;
var G__41375_41534__$1 = (((G__41375_41533 instanceof cljs.core.Keyword))?G__41375_41533.fqn:null);
switch (G__41375_41534__$1) {
case "compute":
var c__34735__auto___41536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41532,c__34735__auto___41536,G__41375_41533,G__41375_41534__$1,n__31090__auto___41531,jobs,results,process,async){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (__41532,c__34735__auto___41536,G__41375_41533,G__41375_41534__$1,n__31090__auto___41531,jobs,results,process,async){
return (function (state_41388){
var state_val_41389 = (state_41388[(1)]);
if((state_val_41389 === (1))){
var state_41388__$1 = state_41388;
var statearr_41390_41537 = state_41388__$1;
(statearr_41390_41537[(2)] = null);

(statearr_41390_41537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41389 === (2))){
var state_41388__$1 = state_41388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41388__$1,(4),jobs);
} else {
if((state_val_41389 === (3))){
var inst_41386 = (state_41388[(2)]);
var state_41388__$1 = state_41388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41388__$1,inst_41386);
} else {
if((state_val_41389 === (4))){
var inst_41378 = (state_41388[(2)]);
var inst_41379 = process.call(null,inst_41378);
var state_41388__$1 = state_41388;
if(cljs.core.truth_(inst_41379)){
var statearr_41391_41538 = state_41388__$1;
(statearr_41391_41538[(1)] = (5));

} else {
var statearr_41392_41539 = state_41388__$1;
(statearr_41392_41539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41389 === (5))){
var state_41388__$1 = state_41388;
var statearr_41393_41540 = state_41388__$1;
(statearr_41393_41540[(2)] = null);

(statearr_41393_41540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41389 === (6))){
var state_41388__$1 = state_41388;
var statearr_41394_41541 = state_41388__$1;
(statearr_41394_41541[(2)] = null);

(statearr_41394_41541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41389 === (7))){
var inst_41384 = (state_41388[(2)]);
var state_41388__$1 = state_41388;
var statearr_41395_41542 = state_41388__$1;
(statearr_41395_41542[(2)] = inst_41384);

(statearr_41395_41542[(1)] = (3));


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
});})(__41532,c__34735__auto___41536,G__41375_41533,G__41375_41534__$1,n__31090__auto___41531,jobs,results,process,async))
;
return ((function (__41532,switch__34712__auto__,c__34735__auto___41536,G__41375_41533,G__41375_41534__$1,n__31090__auto___41531,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____0 = (function (){
var statearr_41396 = [null,null,null,null,null,null,null];
(statearr_41396[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__);

(statearr_41396[(1)] = (1));

return statearr_41396;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____1 = (function (state_41388){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_41388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e41397){if((e41397 instanceof Object)){
var ex__34716__auto__ = e41397;
var statearr_41398_41543 = state_41388;
(statearr_41398_41543[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41544 = state_41388;
state_41388 = G__41544;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__ = function(state_41388){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____1.call(this,state_41388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__;
})()
;})(__41532,switch__34712__auto__,c__34735__auto___41536,G__41375_41533,G__41375_41534__$1,n__31090__auto___41531,jobs,results,process,async))
})();
var state__34737__auto__ = (function (){var statearr_41399 = f__34736__auto__.call(null);
(statearr_41399[(6)] = c__34735__auto___41536);

return statearr_41399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(__41532,c__34735__auto___41536,G__41375_41533,G__41375_41534__$1,n__31090__auto___41531,jobs,results,process,async))
);


break;
case "async":
var c__34735__auto___41545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41532,c__34735__auto___41545,G__41375_41533,G__41375_41534__$1,n__31090__auto___41531,jobs,results,process,async){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (__41532,c__34735__auto___41545,G__41375_41533,G__41375_41534__$1,n__31090__auto___41531,jobs,results,process,async){
return (function (state_41412){
var state_val_41413 = (state_41412[(1)]);
if((state_val_41413 === (1))){
var state_41412__$1 = state_41412;
var statearr_41414_41546 = state_41412__$1;
(statearr_41414_41546[(2)] = null);

(statearr_41414_41546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (2))){
var state_41412__$1 = state_41412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41412__$1,(4),jobs);
} else {
if((state_val_41413 === (3))){
var inst_41410 = (state_41412[(2)]);
var state_41412__$1 = state_41412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41412__$1,inst_41410);
} else {
if((state_val_41413 === (4))){
var inst_41402 = (state_41412[(2)]);
var inst_41403 = async.call(null,inst_41402);
var state_41412__$1 = state_41412;
if(cljs.core.truth_(inst_41403)){
var statearr_41415_41547 = state_41412__$1;
(statearr_41415_41547[(1)] = (5));

} else {
var statearr_41416_41548 = state_41412__$1;
(statearr_41416_41548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (5))){
var state_41412__$1 = state_41412;
var statearr_41417_41549 = state_41412__$1;
(statearr_41417_41549[(2)] = null);

(statearr_41417_41549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (6))){
var state_41412__$1 = state_41412;
var statearr_41418_41550 = state_41412__$1;
(statearr_41418_41550[(2)] = null);

(statearr_41418_41550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (7))){
var inst_41408 = (state_41412[(2)]);
var state_41412__$1 = state_41412;
var statearr_41419_41551 = state_41412__$1;
(statearr_41419_41551[(2)] = inst_41408);

(statearr_41419_41551[(1)] = (3));


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
});})(__41532,c__34735__auto___41545,G__41375_41533,G__41375_41534__$1,n__31090__auto___41531,jobs,results,process,async))
;
return ((function (__41532,switch__34712__auto__,c__34735__auto___41545,G__41375_41533,G__41375_41534__$1,n__31090__auto___41531,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____0 = (function (){
var statearr_41420 = [null,null,null,null,null,null,null];
(statearr_41420[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__);

(statearr_41420[(1)] = (1));

return statearr_41420;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____1 = (function (state_41412){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_41412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e41421){if((e41421 instanceof Object)){
var ex__34716__auto__ = e41421;
var statearr_41422_41552 = state_41412;
(statearr_41422_41552[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41553 = state_41412;
state_41412 = G__41553;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__ = function(state_41412){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____1.call(this,state_41412);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__;
})()
;})(__41532,switch__34712__auto__,c__34735__auto___41545,G__41375_41533,G__41375_41534__$1,n__31090__auto___41531,jobs,results,process,async))
})();
var state__34737__auto__ = (function (){var statearr_41423 = f__34736__auto__.call(null);
(statearr_41423[(6)] = c__34735__auto___41545);

return statearr_41423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(__41532,c__34735__auto___41545,G__41375_41533,G__41375_41534__$1,n__31090__auto___41531,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41375_41534__$1)].join('')));

}

var G__41554 = (__41532 + (1));
__41532 = G__41554;
continue;
} else {
}
break;
}

var c__34735__auto___41555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto___41555,jobs,results,process,async){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto___41555,jobs,results,process,async){
return (function (state_41445){
var state_val_41446 = (state_41445[(1)]);
if((state_val_41446 === (1))){
var state_41445__$1 = state_41445;
var statearr_41447_41556 = state_41445__$1;
(statearr_41447_41556[(2)] = null);

(statearr_41447_41556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41446 === (2))){
var state_41445__$1 = state_41445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41445__$1,(4),from);
} else {
if((state_val_41446 === (3))){
var inst_41443 = (state_41445[(2)]);
var state_41445__$1 = state_41445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41445__$1,inst_41443);
} else {
if((state_val_41446 === (4))){
var inst_41426 = (state_41445[(7)]);
var inst_41426__$1 = (state_41445[(2)]);
var inst_41427 = (inst_41426__$1 == null);
var state_41445__$1 = (function (){var statearr_41448 = state_41445;
(statearr_41448[(7)] = inst_41426__$1);

return statearr_41448;
})();
if(cljs.core.truth_(inst_41427)){
var statearr_41449_41557 = state_41445__$1;
(statearr_41449_41557[(1)] = (5));

} else {
var statearr_41450_41558 = state_41445__$1;
(statearr_41450_41558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41446 === (5))){
var inst_41429 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41445__$1 = state_41445;
var statearr_41451_41559 = state_41445__$1;
(statearr_41451_41559[(2)] = inst_41429);

(statearr_41451_41559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41446 === (6))){
var inst_41431 = (state_41445[(8)]);
var inst_41426 = (state_41445[(7)]);
var inst_41431__$1 = cljs.core.async.chan.call(null,(1));
var inst_41432 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41433 = [inst_41426,inst_41431__$1];
var inst_41434 = (new cljs.core.PersistentVector(null,2,(5),inst_41432,inst_41433,null));
var state_41445__$1 = (function (){var statearr_41452 = state_41445;
(statearr_41452[(8)] = inst_41431__$1);

return statearr_41452;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41445__$1,(8),jobs,inst_41434);
} else {
if((state_val_41446 === (7))){
var inst_41441 = (state_41445[(2)]);
var state_41445__$1 = state_41445;
var statearr_41453_41560 = state_41445__$1;
(statearr_41453_41560[(2)] = inst_41441);

(statearr_41453_41560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41446 === (8))){
var inst_41431 = (state_41445[(8)]);
var inst_41436 = (state_41445[(2)]);
var state_41445__$1 = (function (){var statearr_41454 = state_41445;
(statearr_41454[(9)] = inst_41436);

return statearr_41454;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41445__$1,(9),results,inst_41431);
} else {
if((state_val_41446 === (9))){
var inst_41438 = (state_41445[(2)]);
var state_41445__$1 = (function (){var statearr_41455 = state_41445;
(statearr_41455[(10)] = inst_41438);

return statearr_41455;
})();
var statearr_41456_41561 = state_41445__$1;
(statearr_41456_41561[(2)] = null);

(statearr_41456_41561[(1)] = (2));


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
});})(c__34735__auto___41555,jobs,results,process,async))
;
return ((function (switch__34712__auto__,c__34735__auto___41555,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____0 = (function (){
var statearr_41457 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41457[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__);

(statearr_41457[(1)] = (1));

return statearr_41457;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____1 = (function (state_41445){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_41445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e41458){if((e41458 instanceof Object)){
var ex__34716__auto__ = e41458;
var statearr_41459_41562 = state_41445;
(statearr_41459_41562[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41563 = state_41445;
state_41445 = G__41563;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__ = function(state_41445){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____1.call(this,state_41445);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto___41555,jobs,results,process,async))
})();
var state__34737__auto__ = (function (){var statearr_41460 = f__34736__auto__.call(null);
(statearr_41460[(6)] = c__34735__auto___41555);

return statearr_41460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto___41555,jobs,results,process,async))
);


var c__34735__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto__,jobs,results,process,async){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto__,jobs,results,process,async){
return (function (state_41498){
var state_val_41499 = (state_41498[(1)]);
if((state_val_41499 === (7))){
var inst_41494 = (state_41498[(2)]);
var state_41498__$1 = state_41498;
var statearr_41500_41564 = state_41498__$1;
(statearr_41500_41564[(2)] = inst_41494);

(statearr_41500_41564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41499 === (20))){
var state_41498__$1 = state_41498;
var statearr_41501_41565 = state_41498__$1;
(statearr_41501_41565[(2)] = null);

(statearr_41501_41565[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41499 === (1))){
var state_41498__$1 = state_41498;
var statearr_41502_41566 = state_41498__$1;
(statearr_41502_41566[(2)] = null);

(statearr_41502_41566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41499 === (4))){
var inst_41463 = (state_41498[(7)]);
var inst_41463__$1 = (state_41498[(2)]);
var inst_41464 = (inst_41463__$1 == null);
var state_41498__$1 = (function (){var statearr_41503 = state_41498;
(statearr_41503[(7)] = inst_41463__$1);

return statearr_41503;
})();
if(cljs.core.truth_(inst_41464)){
var statearr_41504_41567 = state_41498__$1;
(statearr_41504_41567[(1)] = (5));

} else {
var statearr_41505_41568 = state_41498__$1;
(statearr_41505_41568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41499 === (15))){
var inst_41476 = (state_41498[(8)]);
var state_41498__$1 = state_41498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41498__$1,(18),to,inst_41476);
} else {
if((state_val_41499 === (21))){
var inst_41489 = (state_41498[(2)]);
var state_41498__$1 = state_41498;
var statearr_41506_41569 = state_41498__$1;
(statearr_41506_41569[(2)] = inst_41489);

(statearr_41506_41569[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41499 === (13))){
var inst_41491 = (state_41498[(2)]);
var state_41498__$1 = (function (){var statearr_41507 = state_41498;
(statearr_41507[(9)] = inst_41491);

return statearr_41507;
})();
var statearr_41508_41570 = state_41498__$1;
(statearr_41508_41570[(2)] = null);

(statearr_41508_41570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41499 === (6))){
var inst_41463 = (state_41498[(7)]);
var state_41498__$1 = state_41498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41498__$1,(11),inst_41463);
} else {
if((state_val_41499 === (17))){
var inst_41484 = (state_41498[(2)]);
var state_41498__$1 = state_41498;
if(cljs.core.truth_(inst_41484)){
var statearr_41509_41571 = state_41498__$1;
(statearr_41509_41571[(1)] = (19));

} else {
var statearr_41510_41572 = state_41498__$1;
(statearr_41510_41572[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41499 === (3))){
var inst_41496 = (state_41498[(2)]);
var state_41498__$1 = state_41498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41498__$1,inst_41496);
} else {
if((state_val_41499 === (12))){
var inst_41473 = (state_41498[(10)]);
var state_41498__$1 = state_41498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41498__$1,(14),inst_41473);
} else {
if((state_val_41499 === (2))){
var state_41498__$1 = state_41498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41498__$1,(4),results);
} else {
if((state_val_41499 === (19))){
var state_41498__$1 = state_41498;
var statearr_41511_41573 = state_41498__$1;
(statearr_41511_41573[(2)] = null);

(statearr_41511_41573[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41499 === (11))){
var inst_41473 = (state_41498[(2)]);
var state_41498__$1 = (function (){var statearr_41512 = state_41498;
(statearr_41512[(10)] = inst_41473);

return statearr_41512;
})();
var statearr_41513_41574 = state_41498__$1;
(statearr_41513_41574[(2)] = null);

(statearr_41513_41574[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41499 === (9))){
var state_41498__$1 = state_41498;
var statearr_41514_41575 = state_41498__$1;
(statearr_41514_41575[(2)] = null);

(statearr_41514_41575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41499 === (5))){
var state_41498__$1 = state_41498;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41515_41576 = state_41498__$1;
(statearr_41515_41576[(1)] = (8));

} else {
var statearr_41516_41577 = state_41498__$1;
(statearr_41516_41577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41499 === (14))){
var inst_41476 = (state_41498[(8)]);
var inst_41478 = (state_41498[(11)]);
var inst_41476__$1 = (state_41498[(2)]);
var inst_41477 = (inst_41476__$1 == null);
var inst_41478__$1 = cljs.core.not.call(null,inst_41477);
var state_41498__$1 = (function (){var statearr_41517 = state_41498;
(statearr_41517[(8)] = inst_41476__$1);

(statearr_41517[(11)] = inst_41478__$1);

return statearr_41517;
})();
if(inst_41478__$1){
var statearr_41518_41578 = state_41498__$1;
(statearr_41518_41578[(1)] = (15));

} else {
var statearr_41519_41579 = state_41498__$1;
(statearr_41519_41579[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41499 === (16))){
var inst_41478 = (state_41498[(11)]);
var state_41498__$1 = state_41498;
var statearr_41520_41580 = state_41498__$1;
(statearr_41520_41580[(2)] = inst_41478);

(statearr_41520_41580[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41499 === (10))){
var inst_41470 = (state_41498[(2)]);
var state_41498__$1 = state_41498;
var statearr_41521_41581 = state_41498__$1;
(statearr_41521_41581[(2)] = inst_41470);

(statearr_41521_41581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41499 === (18))){
var inst_41481 = (state_41498[(2)]);
var state_41498__$1 = state_41498;
var statearr_41522_41582 = state_41498__$1;
(statearr_41522_41582[(2)] = inst_41481);

(statearr_41522_41582[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41499 === (8))){
var inst_41467 = cljs.core.async.close_BANG_.call(null,to);
var state_41498__$1 = state_41498;
var statearr_41523_41583 = state_41498__$1;
(statearr_41523_41583[(2)] = inst_41467);

(statearr_41523_41583[(1)] = (10));


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
});})(c__34735__auto__,jobs,results,process,async))
;
return ((function (switch__34712__auto__,c__34735__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____0 = (function (){
var statearr_41524 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__);

(statearr_41524[(1)] = (1));

return statearr_41524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____1 = (function (state_41498){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_41498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e41525){if((e41525 instanceof Object)){
var ex__34716__auto__ = e41525;
var statearr_41526_41584 = state_41498;
(statearr_41526_41584[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41585 = state_41498;
state_41498 = G__41585;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__ = function(state_41498){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____1.call(this,state_41498);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto__,jobs,results,process,async))
})();
var state__34737__auto__ = (function (){var statearr_41527 = f__34736__auto__.call(null);
(statearr_41527[(6)] = c__34735__auto__);

return statearr_41527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto__,jobs,results,process,async))
);

return c__34735__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__41587 = arguments.length;
switch (G__41587) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__41590 = arguments.length;
switch (G__41590) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__41593 = arguments.length;
switch (G__41593) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__34735__auto___41642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto___41642,tc,fc){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto___41642,tc,fc){
return (function (state_41619){
var state_val_41620 = (state_41619[(1)]);
if((state_val_41620 === (7))){
var inst_41615 = (state_41619[(2)]);
var state_41619__$1 = state_41619;
var statearr_41621_41643 = state_41619__$1;
(statearr_41621_41643[(2)] = inst_41615);

(statearr_41621_41643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41620 === (1))){
var state_41619__$1 = state_41619;
var statearr_41622_41644 = state_41619__$1;
(statearr_41622_41644[(2)] = null);

(statearr_41622_41644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41620 === (4))){
var inst_41596 = (state_41619[(7)]);
var inst_41596__$1 = (state_41619[(2)]);
var inst_41597 = (inst_41596__$1 == null);
var state_41619__$1 = (function (){var statearr_41623 = state_41619;
(statearr_41623[(7)] = inst_41596__$1);

return statearr_41623;
})();
if(cljs.core.truth_(inst_41597)){
var statearr_41624_41645 = state_41619__$1;
(statearr_41624_41645[(1)] = (5));

} else {
var statearr_41625_41646 = state_41619__$1;
(statearr_41625_41646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41620 === (13))){
var state_41619__$1 = state_41619;
var statearr_41626_41647 = state_41619__$1;
(statearr_41626_41647[(2)] = null);

(statearr_41626_41647[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41620 === (6))){
var inst_41596 = (state_41619[(7)]);
var inst_41602 = p.call(null,inst_41596);
var state_41619__$1 = state_41619;
if(cljs.core.truth_(inst_41602)){
var statearr_41627_41648 = state_41619__$1;
(statearr_41627_41648[(1)] = (9));

} else {
var statearr_41628_41649 = state_41619__$1;
(statearr_41628_41649[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41620 === (3))){
var inst_41617 = (state_41619[(2)]);
var state_41619__$1 = state_41619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41619__$1,inst_41617);
} else {
if((state_val_41620 === (12))){
var state_41619__$1 = state_41619;
var statearr_41629_41650 = state_41619__$1;
(statearr_41629_41650[(2)] = null);

(statearr_41629_41650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41620 === (2))){
var state_41619__$1 = state_41619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41619__$1,(4),ch);
} else {
if((state_val_41620 === (11))){
var inst_41596 = (state_41619[(7)]);
var inst_41606 = (state_41619[(2)]);
var state_41619__$1 = state_41619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41619__$1,(8),inst_41606,inst_41596);
} else {
if((state_val_41620 === (9))){
var state_41619__$1 = state_41619;
var statearr_41630_41651 = state_41619__$1;
(statearr_41630_41651[(2)] = tc);

(statearr_41630_41651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41620 === (5))){
var inst_41599 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41600 = cljs.core.async.close_BANG_.call(null,fc);
var state_41619__$1 = (function (){var statearr_41631 = state_41619;
(statearr_41631[(8)] = inst_41599);

return statearr_41631;
})();
var statearr_41632_41652 = state_41619__$1;
(statearr_41632_41652[(2)] = inst_41600);

(statearr_41632_41652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41620 === (14))){
var inst_41613 = (state_41619[(2)]);
var state_41619__$1 = state_41619;
var statearr_41633_41653 = state_41619__$1;
(statearr_41633_41653[(2)] = inst_41613);

(statearr_41633_41653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41620 === (10))){
var state_41619__$1 = state_41619;
var statearr_41634_41654 = state_41619__$1;
(statearr_41634_41654[(2)] = fc);

(statearr_41634_41654[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41620 === (8))){
var inst_41608 = (state_41619[(2)]);
var state_41619__$1 = state_41619;
if(cljs.core.truth_(inst_41608)){
var statearr_41635_41655 = state_41619__$1;
(statearr_41635_41655[(1)] = (12));

} else {
var statearr_41636_41656 = state_41619__$1;
(statearr_41636_41656[(1)] = (13));

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
});})(c__34735__auto___41642,tc,fc))
;
return ((function (switch__34712__auto__,c__34735__auto___41642,tc,fc){
return (function() {
var cljs$core$async$state_machine__34713__auto__ = null;
var cljs$core$async$state_machine__34713__auto____0 = (function (){
var statearr_41637 = [null,null,null,null,null,null,null,null,null];
(statearr_41637[(0)] = cljs$core$async$state_machine__34713__auto__);

(statearr_41637[(1)] = (1));

return statearr_41637;
});
var cljs$core$async$state_machine__34713__auto____1 = (function (state_41619){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_41619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e41638){if((e41638 instanceof Object)){
var ex__34716__auto__ = e41638;
var statearr_41639_41657 = state_41619;
(statearr_41639_41657[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41658 = state_41619;
state_41619 = G__41658;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$state_machine__34713__auto__ = function(state_41619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34713__auto____1.call(this,state_41619);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34713__auto____0;
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34713__auto____1;
return cljs$core$async$state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto___41642,tc,fc))
})();
var state__34737__auto__ = (function (){var statearr_41640 = f__34736__auto__.call(null);
(statearr_41640[(6)] = c__34735__auto___41642);

return statearr_41640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto___41642,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34735__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto__){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto__){
return (function (state_41679){
var state_val_41680 = (state_41679[(1)]);
if((state_val_41680 === (7))){
var inst_41675 = (state_41679[(2)]);
var state_41679__$1 = state_41679;
var statearr_41681_41699 = state_41679__$1;
(statearr_41681_41699[(2)] = inst_41675);

(statearr_41681_41699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41680 === (1))){
var inst_41659 = init;
var state_41679__$1 = (function (){var statearr_41682 = state_41679;
(statearr_41682[(7)] = inst_41659);

return statearr_41682;
})();
var statearr_41683_41700 = state_41679__$1;
(statearr_41683_41700[(2)] = null);

(statearr_41683_41700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41680 === (4))){
var inst_41662 = (state_41679[(8)]);
var inst_41662__$1 = (state_41679[(2)]);
var inst_41663 = (inst_41662__$1 == null);
var state_41679__$1 = (function (){var statearr_41684 = state_41679;
(statearr_41684[(8)] = inst_41662__$1);

return statearr_41684;
})();
if(cljs.core.truth_(inst_41663)){
var statearr_41685_41701 = state_41679__$1;
(statearr_41685_41701[(1)] = (5));

} else {
var statearr_41686_41702 = state_41679__$1;
(statearr_41686_41702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41680 === (6))){
var inst_41666 = (state_41679[(9)]);
var inst_41659 = (state_41679[(7)]);
var inst_41662 = (state_41679[(8)]);
var inst_41666__$1 = f.call(null,inst_41659,inst_41662);
var inst_41667 = cljs.core.reduced_QMARK_.call(null,inst_41666__$1);
var state_41679__$1 = (function (){var statearr_41687 = state_41679;
(statearr_41687[(9)] = inst_41666__$1);

return statearr_41687;
})();
if(inst_41667){
var statearr_41688_41703 = state_41679__$1;
(statearr_41688_41703[(1)] = (8));

} else {
var statearr_41689_41704 = state_41679__$1;
(statearr_41689_41704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41680 === (3))){
var inst_41677 = (state_41679[(2)]);
var state_41679__$1 = state_41679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41679__$1,inst_41677);
} else {
if((state_val_41680 === (2))){
var state_41679__$1 = state_41679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41679__$1,(4),ch);
} else {
if((state_val_41680 === (9))){
var inst_41666 = (state_41679[(9)]);
var inst_41659 = inst_41666;
var state_41679__$1 = (function (){var statearr_41690 = state_41679;
(statearr_41690[(7)] = inst_41659);

return statearr_41690;
})();
var statearr_41691_41705 = state_41679__$1;
(statearr_41691_41705[(2)] = null);

(statearr_41691_41705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41680 === (5))){
var inst_41659 = (state_41679[(7)]);
var state_41679__$1 = state_41679;
var statearr_41692_41706 = state_41679__$1;
(statearr_41692_41706[(2)] = inst_41659);

(statearr_41692_41706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41680 === (10))){
var inst_41673 = (state_41679[(2)]);
var state_41679__$1 = state_41679;
var statearr_41693_41707 = state_41679__$1;
(statearr_41693_41707[(2)] = inst_41673);

(statearr_41693_41707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41680 === (8))){
var inst_41666 = (state_41679[(9)]);
var inst_41669 = cljs.core.deref.call(null,inst_41666);
var state_41679__$1 = state_41679;
var statearr_41694_41708 = state_41679__$1;
(statearr_41694_41708[(2)] = inst_41669);

(statearr_41694_41708[(1)] = (10));


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
});})(c__34735__auto__))
;
return ((function (switch__34712__auto__,c__34735__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34713__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34713__auto____0 = (function (){
var statearr_41695 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41695[(0)] = cljs$core$async$reduce_$_state_machine__34713__auto__);

(statearr_41695[(1)] = (1));

return statearr_41695;
});
var cljs$core$async$reduce_$_state_machine__34713__auto____1 = (function (state_41679){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_41679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e41696){if((e41696 instanceof Object)){
var ex__34716__auto__ = e41696;
var statearr_41697_41709 = state_41679;
(statearr_41697_41709[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41710 = state_41679;
state_41679 = G__41710;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34713__auto__ = function(state_41679){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34713__auto____1.call(this,state_41679);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34713__auto____0;
cljs$core$async$reduce_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34713__auto____1;
return cljs$core$async$reduce_$_state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto__))
})();
var state__34737__auto__ = (function (){var statearr_41698 = f__34736__auto__.call(null);
(statearr_41698[(6)] = c__34735__auto__);

return statearr_41698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto__))
);

return c__34735__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34735__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto__,f__$1){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto__,f__$1){
return (function (state_41716){
var state_val_41717 = (state_41716[(1)]);
if((state_val_41717 === (1))){
var inst_41711 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_41716__$1 = state_41716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41716__$1,(2),inst_41711);
} else {
if((state_val_41717 === (2))){
var inst_41713 = (state_41716[(2)]);
var inst_41714 = f__$1.call(null,inst_41713);
var state_41716__$1 = state_41716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41716__$1,inst_41714);
} else {
return null;
}
}
});})(c__34735__auto__,f__$1))
;
return ((function (switch__34712__auto__,c__34735__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34713__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34713__auto____0 = (function (){
var statearr_41718 = [null,null,null,null,null,null,null];
(statearr_41718[(0)] = cljs$core$async$transduce_$_state_machine__34713__auto__);

(statearr_41718[(1)] = (1));

return statearr_41718;
});
var cljs$core$async$transduce_$_state_machine__34713__auto____1 = (function (state_41716){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_41716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e41719){if((e41719 instanceof Object)){
var ex__34716__auto__ = e41719;
var statearr_41720_41722 = state_41716;
(statearr_41720_41722[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41723 = state_41716;
state_41716 = G__41723;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34713__auto__ = function(state_41716){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34713__auto____1.call(this,state_41716);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34713__auto____0;
cljs$core$async$transduce_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34713__auto____1;
return cljs$core$async$transduce_$_state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto__,f__$1))
})();
var state__34737__auto__ = (function (){var statearr_41721 = f__34736__auto__.call(null);
(statearr_41721[(6)] = c__34735__auto__);

return statearr_41721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto__,f__$1))
);

return c__34735__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__41725 = arguments.length;
switch (G__41725) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34735__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto__){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto__){
return (function (state_41750){
var state_val_41751 = (state_41750[(1)]);
if((state_val_41751 === (7))){
var inst_41732 = (state_41750[(2)]);
var state_41750__$1 = state_41750;
var statearr_41752_41773 = state_41750__$1;
(statearr_41752_41773[(2)] = inst_41732);

(statearr_41752_41773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41751 === (1))){
var inst_41726 = cljs.core.seq.call(null,coll);
var inst_41727 = inst_41726;
var state_41750__$1 = (function (){var statearr_41753 = state_41750;
(statearr_41753[(7)] = inst_41727);

return statearr_41753;
})();
var statearr_41754_41774 = state_41750__$1;
(statearr_41754_41774[(2)] = null);

(statearr_41754_41774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41751 === (4))){
var inst_41727 = (state_41750[(7)]);
var inst_41730 = cljs.core.first.call(null,inst_41727);
var state_41750__$1 = state_41750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41750__$1,(7),ch,inst_41730);
} else {
if((state_val_41751 === (13))){
var inst_41744 = (state_41750[(2)]);
var state_41750__$1 = state_41750;
var statearr_41755_41775 = state_41750__$1;
(statearr_41755_41775[(2)] = inst_41744);

(statearr_41755_41775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41751 === (6))){
var inst_41735 = (state_41750[(2)]);
var state_41750__$1 = state_41750;
if(cljs.core.truth_(inst_41735)){
var statearr_41756_41776 = state_41750__$1;
(statearr_41756_41776[(1)] = (8));

} else {
var statearr_41757_41777 = state_41750__$1;
(statearr_41757_41777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41751 === (3))){
var inst_41748 = (state_41750[(2)]);
var state_41750__$1 = state_41750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41750__$1,inst_41748);
} else {
if((state_val_41751 === (12))){
var state_41750__$1 = state_41750;
var statearr_41758_41778 = state_41750__$1;
(statearr_41758_41778[(2)] = null);

(statearr_41758_41778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41751 === (2))){
var inst_41727 = (state_41750[(7)]);
var state_41750__$1 = state_41750;
if(cljs.core.truth_(inst_41727)){
var statearr_41759_41779 = state_41750__$1;
(statearr_41759_41779[(1)] = (4));

} else {
var statearr_41760_41780 = state_41750__$1;
(statearr_41760_41780[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41751 === (11))){
var inst_41741 = cljs.core.async.close_BANG_.call(null,ch);
var state_41750__$1 = state_41750;
var statearr_41761_41781 = state_41750__$1;
(statearr_41761_41781[(2)] = inst_41741);

(statearr_41761_41781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41751 === (9))){
var state_41750__$1 = state_41750;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41762_41782 = state_41750__$1;
(statearr_41762_41782[(1)] = (11));

} else {
var statearr_41763_41783 = state_41750__$1;
(statearr_41763_41783[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41751 === (5))){
var inst_41727 = (state_41750[(7)]);
var state_41750__$1 = state_41750;
var statearr_41764_41784 = state_41750__$1;
(statearr_41764_41784[(2)] = inst_41727);

(statearr_41764_41784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41751 === (10))){
var inst_41746 = (state_41750[(2)]);
var state_41750__$1 = state_41750;
var statearr_41765_41785 = state_41750__$1;
(statearr_41765_41785[(2)] = inst_41746);

(statearr_41765_41785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41751 === (8))){
var inst_41727 = (state_41750[(7)]);
var inst_41737 = cljs.core.next.call(null,inst_41727);
var inst_41727__$1 = inst_41737;
var state_41750__$1 = (function (){var statearr_41766 = state_41750;
(statearr_41766[(7)] = inst_41727__$1);

return statearr_41766;
})();
var statearr_41767_41786 = state_41750__$1;
(statearr_41767_41786[(2)] = null);

(statearr_41767_41786[(1)] = (2));


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
});})(c__34735__auto__))
;
return ((function (switch__34712__auto__,c__34735__auto__){
return (function() {
var cljs$core$async$state_machine__34713__auto__ = null;
var cljs$core$async$state_machine__34713__auto____0 = (function (){
var statearr_41768 = [null,null,null,null,null,null,null,null];
(statearr_41768[(0)] = cljs$core$async$state_machine__34713__auto__);

(statearr_41768[(1)] = (1));

return statearr_41768;
});
var cljs$core$async$state_machine__34713__auto____1 = (function (state_41750){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_41750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e41769){if((e41769 instanceof Object)){
var ex__34716__auto__ = e41769;
var statearr_41770_41787 = state_41750;
(statearr_41770_41787[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41788 = state_41750;
state_41750 = G__41788;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$state_machine__34713__auto__ = function(state_41750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34713__auto____1.call(this,state_41750);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34713__auto____0;
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34713__auto____1;
return cljs$core$async$state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto__))
})();
var state__34737__auto__ = (function (){var statearr_41771 = f__34736__auto__.call(null);
(statearr_41771[(6)] = c__34735__auto__);

return statearr_41771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto__))
);

return c__34735__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30780__auto__ = (((_ == null))?null:_);
var m__30781__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30780__auto__)]);
if(!((m__30781__auto__ == null))){
return m__30781__auto__.call(null,_);
} else {
var m__30781__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30781__auto____$1 == null))){
return m__30781__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30780__auto__ = (((m == null))?null:m);
var m__30781__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30780__auto__)]);
if(!((m__30781__auto__ == null))){
return m__30781__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30781__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30781__auto____$1 == null))){
return m__30781__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30780__auto__ = (((m == null))?null:m);
var m__30781__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30780__auto__)]);
if(!((m__30781__auto__ == null))){
return m__30781__auto__.call(null,m,ch);
} else {
var m__30781__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30781__auto____$1 == null))){
return m__30781__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30780__auto__ = (((m == null))?null:m);
var m__30781__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30780__auto__)]);
if(!((m__30781__auto__ == null))){
return m__30781__auto__.call(null,m);
} else {
var m__30781__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30781__auto____$1 == null))){
return m__30781__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async41789 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41789 = (function (ch,cs,meta41790){
this.ch = ch;
this.cs = cs;
this.meta41790 = meta41790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41791,meta41790__$1){
var self__ = this;
var _41791__$1 = this;
return (new cljs.core.async.t_cljs$core$async41789(self__.ch,self__.cs,meta41790__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41791){
var self__ = this;
var _41791__$1 = this;
return self__.meta41790;
});})(cs))
;

cljs.core.async.t_cljs$core$async41789.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41789.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41789.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41789.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41789.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41789.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41789.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41790","meta41790",-211127660,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41789.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41789";

cljs.core.async.t_cljs$core$async41789.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30718__auto__,writer__30719__auto__,opt__30720__auto__){
return cljs.core._write.call(null,writer__30719__auto__,"cljs.core.async/t_cljs$core$async41789");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async41789 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41789(ch__$1,cs__$1,meta41790){
return (new cljs.core.async.t_cljs$core$async41789(ch__$1,cs__$1,meta41790));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41789(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__34735__auto___42011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto___42011,cs,m,dchan,dctr,done){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto___42011,cs,m,dchan,dctr,done){
return (function (state_41926){
var state_val_41927 = (state_41926[(1)]);
if((state_val_41927 === (7))){
var inst_41922 = (state_41926[(2)]);
var state_41926__$1 = state_41926;
var statearr_41928_42012 = state_41926__$1;
(statearr_41928_42012[(2)] = inst_41922);

(statearr_41928_42012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (20))){
var inst_41825 = (state_41926[(7)]);
var inst_41837 = cljs.core.first.call(null,inst_41825);
var inst_41838 = cljs.core.nth.call(null,inst_41837,(0),null);
var inst_41839 = cljs.core.nth.call(null,inst_41837,(1),null);
var state_41926__$1 = (function (){var statearr_41929 = state_41926;
(statearr_41929[(8)] = inst_41838);

return statearr_41929;
})();
if(cljs.core.truth_(inst_41839)){
var statearr_41930_42013 = state_41926__$1;
(statearr_41930_42013[(1)] = (22));

} else {
var statearr_41931_42014 = state_41926__$1;
(statearr_41931_42014[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (27))){
var inst_41869 = (state_41926[(9)]);
var inst_41867 = (state_41926[(10)]);
var inst_41794 = (state_41926[(11)]);
var inst_41874 = (state_41926[(12)]);
var inst_41874__$1 = cljs.core._nth.call(null,inst_41867,inst_41869);
var inst_41875 = cljs.core.async.put_BANG_.call(null,inst_41874__$1,inst_41794,done);
var state_41926__$1 = (function (){var statearr_41932 = state_41926;
(statearr_41932[(12)] = inst_41874__$1);

return statearr_41932;
})();
if(cljs.core.truth_(inst_41875)){
var statearr_41933_42015 = state_41926__$1;
(statearr_41933_42015[(1)] = (30));

} else {
var statearr_41934_42016 = state_41926__$1;
(statearr_41934_42016[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (1))){
var state_41926__$1 = state_41926;
var statearr_41935_42017 = state_41926__$1;
(statearr_41935_42017[(2)] = null);

(statearr_41935_42017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (24))){
var inst_41825 = (state_41926[(7)]);
var inst_41844 = (state_41926[(2)]);
var inst_41845 = cljs.core.next.call(null,inst_41825);
var inst_41803 = inst_41845;
var inst_41804 = null;
var inst_41805 = (0);
var inst_41806 = (0);
var state_41926__$1 = (function (){var statearr_41936 = state_41926;
(statearr_41936[(13)] = inst_41803);

(statearr_41936[(14)] = inst_41844);

(statearr_41936[(15)] = inst_41805);

(statearr_41936[(16)] = inst_41806);

(statearr_41936[(17)] = inst_41804);

return statearr_41936;
})();
var statearr_41937_42018 = state_41926__$1;
(statearr_41937_42018[(2)] = null);

(statearr_41937_42018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (39))){
var state_41926__$1 = state_41926;
var statearr_41941_42019 = state_41926__$1;
(statearr_41941_42019[(2)] = null);

(statearr_41941_42019[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (4))){
var inst_41794 = (state_41926[(11)]);
var inst_41794__$1 = (state_41926[(2)]);
var inst_41795 = (inst_41794__$1 == null);
var state_41926__$1 = (function (){var statearr_41942 = state_41926;
(statearr_41942[(11)] = inst_41794__$1);

return statearr_41942;
})();
if(cljs.core.truth_(inst_41795)){
var statearr_41943_42020 = state_41926__$1;
(statearr_41943_42020[(1)] = (5));

} else {
var statearr_41944_42021 = state_41926__$1;
(statearr_41944_42021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (15))){
var inst_41803 = (state_41926[(13)]);
var inst_41805 = (state_41926[(15)]);
var inst_41806 = (state_41926[(16)]);
var inst_41804 = (state_41926[(17)]);
var inst_41821 = (state_41926[(2)]);
var inst_41822 = (inst_41806 + (1));
var tmp41938 = inst_41803;
var tmp41939 = inst_41805;
var tmp41940 = inst_41804;
var inst_41803__$1 = tmp41938;
var inst_41804__$1 = tmp41940;
var inst_41805__$1 = tmp41939;
var inst_41806__$1 = inst_41822;
var state_41926__$1 = (function (){var statearr_41945 = state_41926;
(statearr_41945[(13)] = inst_41803__$1);

(statearr_41945[(15)] = inst_41805__$1);

(statearr_41945[(16)] = inst_41806__$1);

(statearr_41945[(17)] = inst_41804__$1);

(statearr_41945[(18)] = inst_41821);

return statearr_41945;
})();
var statearr_41946_42022 = state_41926__$1;
(statearr_41946_42022[(2)] = null);

(statearr_41946_42022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (21))){
var inst_41848 = (state_41926[(2)]);
var state_41926__$1 = state_41926;
var statearr_41950_42023 = state_41926__$1;
(statearr_41950_42023[(2)] = inst_41848);

(statearr_41950_42023[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (31))){
var inst_41874 = (state_41926[(12)]);
var inst_41878 = done.call(null,null);
var inst_41879 = cljs.core.async.untap_STAR_.call(null,m,inst_41874);
var state_41926__$1 = (function (){var statearr_41951 = state_41926;
(statearr_41951[(19)] = inst_41878);

return statearr_41951;
})();
var statearr_41952_42024 = state_41926__$1;
(statearr_41952_42024[(2)] = inst_41879);

(statearr_41952_42024[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (32))){
var inst_41869 = (state_41926[(9)]);
var inst_41866 = (state_41926[(20)]);
var inst_41867 = (state_41926[(10)]);
var inst_41868 = (state_41926[(21)]);
var inst_41881 = (state_41926[(2)]);
var inst_41882 = (inst_41869 + (1));
var tmp41947 = inst_41866;
var tmp41948 = inst_41867;
var tmp41949 = inst_41868;
var inst_41866__$1 = tmp41947;
var inst_41867__$1 = tmp41948;
var inst_41868__$1 = tmp41949;
var inst_41869__$1 = inst_41882;
var state_41926__$1 = (function (){var statearr_41953 = state_41926;
(statearr_41953[(9)] = inst_41869__$1);

(statearr_41953[(20)] = inst_41866__$1);

(statearr_41953[(10)] = inst_41867__$1);

(statearr_41953[(22)] = inst_41881);

(statearr_41953[(21)] = inst_41868__$1);

return statearr_41953;
})();
var statearr_41954_42025 = state_41926__$1;
(statearr_41954_42025[(2)] = null);

(statearr_41954_42025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (40))){
var inst_41894 = (state_41926[(23)]);
var inst_41898 = done.call(null,null);
var inst_41899 = cljs.core.async.untap_STAR_.call(null,m,inst_41894);
var state_41926__$1 = (function (){var statearr_41955 = state_41926;
(statearr_41955[(24)] = inst_41898);

return statearr_41955;
})();
var statearr_41956_42026 = state_41926__$1;
(statearr_41956_42026[(2)] = inst_41899);

(statearr_41956_42026[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (33))){
var inst_41885 = (state_41926[(25)]);
var inst_41887 = cljs.core.chunked_seq_QMARK_.call(null,inst_41885);
var state_41926__$1 = state_41926;
if(inst_41887){
var statearr_41957_42027 = state_41926__$1;
(statearr_41957_42027[(1)] = (36));

} else {
var statearr_41958_42028 = state_41926__$1;
(statearr_41958_42028[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (13))){
var inst_41815 = (state_41926[(26)]);
var inst_41818 = cljs.core.async.close_BANG_.call(null,inst_41815);
var state_41926__$1 = state_41926;
var statearr_41959_42029 = state_41926__$1;
(statearr_41959_42029[(2)] = inst_41818);

(statearr_41959_42029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (22))){
var inst_41838 = (state_41926[(8)]);
var inst_41841 = cljs.core.async.close_BANG_.call(null,inst_41838);
var state_41926__$1 = state_41926;
var statearr_41960_42030 = state_41926__$1;
(statearr_41960_42030[(2)] = inst_41841);

(statearr_41960_42030[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (36))){
var inst_41885 = (state_41926[(25)]);
var inst_41889 = cljs.core.chunk_first.call(null,inst_41885);
var inst_41890 = cljs.core.chunk_rest.call(null,inst_41885);
var inst_41891 = cljs.core.count.call(null,inst_41889);
var inst_41866 = inst_41890;
var inst_41867 = inst_41889;
var inst_41868 = inst_41891;
var inst_41869 = (0);
var state_41926__$1 = (function (){var statearr_41961 = state_41926;
(statearr_41961[(9)] = inst_41869);

(statearr_41961[(20)] = inst_41866);

(statearr_41961[(10)] = inst_41867);

(statearr_41961[(21)] = inst_41868);

return statearr_41961;
})();
var statearr_41962_42031 = state_41926__$1;
(statearr_41962_42031[(2)] = null);

(statearr_41962_42031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (41))){
var inst_41885 = (state_41926[(25)]);
var inst_41901 = (state_41926[(2)]);
var inst_41902 = cljs.core.next.call(null,inst_41885);
var inst_41866 = inst_41902;
var inst_41867 = null;
var inst_41868 = (0);
var inst_41869 = (0);
var state_41926__$1 = (function (){var statearr_41963 = state_41926;
(statearr_41963[(9)] = inst_41869);

(statearr_41963[(20)] = inst_41866);

(statearr_41963[(10)] = inst_41867);

(statearr_41963[(27)] = inst_41901);

(statearr_41963[(21)] = inst_41868);

return statearr_41963;
})();
var statearr_41964_42032 = state_41926__$1;
(statearr_41964_42032[(2)] = null);

(statearr_41964_42032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (43))){
var state_41926__$1 = state_41926;
var statearr_41965_42033 = state_41926__$1;
(statearr_41965_42033[(2)] = null);

(statearr_41965_42033[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (29))){
var inst_41910 = (state_41926[(2)]);
var state_41926__$1 = state_41926;
var statearr_41966_42034 = state_41926__$1;
(statearr_41966_42034[(2)] = inst_41910);

(statearr_41966_42034[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (44))){
var inst_41919 = (state_41926[(2)]);
var state_41926__$1 = (function (){var statearr_41967 = state_41926;
(statearr_41967[(28)] = inst_41919);

return statearr_41967;
})();
var statearr_41968_42035 = state_41926__$1;
(statearr_41968_42035[(2)] = null);

(statearr_41968_42035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (6))){
var inst_41858 = (state_41926[(29)]);
var inst_41857 = cljs.core.deref.call(null,cs);
var inst_41858__$1 = cljs.core.keys.call(null,inst_41857);
var inst_41859 = cljs.core.count.call(null,inst_41858__$1);
var inst_41860 = cljs.core.reset_BANG_.call(null,dctr,inst_41859);
var inst_41865 = cljs.core.seq.call(null,inst_41858__$1);
var inst_41866 = inst_41865;
var inst_41867 = null;
var inst_41868 = (0);
var inst_41869 = (0);
var state_41926__$1 = (function (){var statearr_41969 = state_41926;
(statearr_41969[(30)] = inst_41860);

(statearr_41969[(9)] = inst_41869);

(statearr_41969[(20)] = inst_41866);

(statearr_41969[(10)] = inst_41867);

(statearr_41969[(21)] = inst_41868);

(statearr_41969[(29)] = inst_41858__$1);

return statearr_41969;
})();
var statearr_41970_42036 = state_41926__$1;
(statearr_41970_42036[(2)] = null);

(statearr_41970_42036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (28))){
var inst_41866 = (state_41926[(20)]);
var inst_41885 = (state_41926[(25)]);
var inst_41885__$1 = cljs.core.seq.call(null,inst_41866);
var state_41926__$1 = (function (){var statearr_41971 = state_41926;
(statearr_41971[(25)] = inst_41885__$1);

return statearr_41971;
})();
if(inst_41885__$1){
var statearr_41972_42037 = state_41926__$1;
(statearr_41972_42037[(1)] = (33));

} else {
var statearr_41973_42038 = state_41926__$1;
(statearr_41973_42038[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (25))){
var inst_41869 = (state_41926[(9)]);
var inst_41868 = (state_41926[(21)]);
var inst_41871 = (inst_41869 < inst_41868);
var inst_41872 = inst_41871;
var state_41926__$1 = state_41926;
if(cljs.core.truth_(inst_41872)){
var statearr_41974_42039 = state_41926__$1;
(statearr_41974_42039[(1)] = (27));

} else {
var statearr_41975_42040 = state_41926__$1;
(statearr_41975_42040[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (34))){
var state_41926__$1 = state_41926;
var statearr_41976_42041 = state_41926__$1;
(statearr_41976_42041[(2)] = null);

(statearr_41976_42041[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (17))){
var state_41926__$1 = state_41926;
var statearr_41977_42042 = state_41926__$1;
(statearr_41977_42042[(2)] = null);

(statearr_41977_42042[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (3))){
var inst_41924 = (state_41926[(2)]);
var state_41926__$1 = state_41926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41926__$1,inst_41924);
} else {
if((state_val_41927 === (12))){
var inst_41853 = (state_41926[(2)]);
var state_41926__$1 = state_41926;
var statearr_41978_42043 = state_41926__$1;
(statearr_41978_42043[(2)] = inst_41853);

(statearr_41978_42043[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (2))){
var state_41926__$1 = state_41926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41926__$1,(4),ch);
} else {
if((state_val_41927 === (23))){
var state_41926__$1 = state_41926;
var statearr_41979_42044 = state_41926__$1;
(statearr_41979_42044[(2)] = null);

(statearr_41979_42044[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (35))){
var inst_41908 = (state_41926[(2)]);
var state_41926__$1 = state_41926;
var statearr_41980_42045 = state_41926__$1;
(statearr_41980_42045[(2)] = inst_41908);

(statearr_41980_42045[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (19))){
var inst_41825 = (state_41926[(7)]);
var inst_41829 = cljs.core.chunk_first.call(null,inst_41825);
var inst_41830 = cljs.core.chunk_rest.call(null,inst_41825);
var inst_41831 = cljs.core.count.call(null,inst_41829);
var inst_41803 = inst_41830;
var inst_41804 = inst_41829;
var inst_41805 = inst_41831;
var inst_41806 = (0);
var state_41926__$1 = (function (){var statearr_41981 = state_41926;
(statearr_41981[(13)] = inst_41803);

(statearr_41981[(15)] = inst_41805);

(statearr_41981[(16)] = inst_41806);

(statearr_41981[(17)] = inst_41804);

return statearr_41981;
})();
var statearr_41982_42046 = state_41926__$1;
(statearr_41982_42046[(2)] = null);

(statearr_41982_42046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (11))){
var inst_41825 = (state_41926[(7)]);
var inst_41803 = (state_41926[(13)]);
var inst_41825__$1 = cljs.core.seq.call(null,inst_41803);
var state_41926__$1 = (function (){var statearr_41983 = state_41926;
(statearr_41983[(7)] = inst_41825__$1);

return statearr_41983;
})();
if(inst_41825__$1){
var statearr_41984_42047 = state_41926__$1;
(statearr_41984_42047[(1)] = (16));

} else {
var statearr_41985_42048 = state_41926__$1;
(statearr_41985_42048[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (9))){
var inst_41855 = (state_41926[(2)]);
var state_41926__$1 = state_41926;
var statearr_41986_42049 = state_41926__$1;
(statearr_41986_42049[(2)] = inst_41855);

(statearr_41986_42049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (5))){
var inst_41801 = cljs.core.deref.call(null,cs);
var inst_41802 = cljs.core.seq.call(null,inst_41801);
var inst_41803 = inst_41802;
var inst_41804 = null;
var inst_41805 = (0);
var inst_41806 = (0);
var state_41926__$1 = (function (){var statearr_41987 = state_41926;
(statearr_41987[(13)] = inst_41803);

(statearr_41987[(15)] = inst_41805);

(statearr_41987[(16)] = inst_41806);

(statearr_41987[(17)] = inst_41804);

return statearr_41987;
})();
var statearr_41988_42050 = state_41926__$1;
(statearr_41988_42050[(2)] = null);

(statearr_41988_42050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (14))){
var state_41926__$1 = state_41926;
var statearr_41989_42051 = state_41926__$1;
(statearr_41989_42051[(2)] = null);

(statearr_41989_42051[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (45))){
var inst_41916 = (state_41926[(2)]);
var state_41926__$1 = state_41926;
var statearr_41990_42052 = state_41926__$1;
(statearr_41990_42052[(2)] = inst_41916);

(statearr_41990_42052[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (26))){
var inst_41858 = (state_41926[(29)]);
var inst_41912 = (state_41926[(2)]);
var inst_41913 = cljs.core.seq.call(null,inst_41858);
var state_41926__$1 = (function (){var statearr_41991 = state_41926;
(statearr_41991[(31)] = inst_41912);

return statearr_41991;
})();
if(inst_41913){
var statearr_41992_42053 = state_41926__$1;
(statearr_41992_42053[(1)] = (42));

} else {
var statearr_41993_42054 = state_41926__$1;
(statearr_41993_42054[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (16))){
var inst_41825 = (state_41926[(7)]);
var inst_41827 = cljs.core.chunked_seq_QMARK_.call(null,inst_41825);
var state_41926__$1 = state_41926;
if(inst_41827){
var statearr_41994_42055 = state_41926__$1;
(statearr_41994_42055[(1)] = (19));

} else {
var statearr_41995_42056 = state_41926__$1;
(statearr_41995_42056[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (38))){
var inst_41905 = (state_41926[(2)]);
var state_41926__$1 = state_41926;
var statearr_41996_42057 = state_41926__$1;
(statearr_41996_42057[(2)] = inst_41905);

(statearr_41996_42057[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (30))){
var state_41926__$1 = state_41926;
var statearr_41997_42058 = state_41926__$1;
(statearr_41997_42058[(2)] = null);

(statearr_41997_42058[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (10))){
var inst_41806 = (state_41926[(16)]);
var inst_41804 = (state_41926[(17)]);
var inst_41814 = cljs.core._nth.call(null,inst_41804,inst_41806);
var inst_41815 = cljs.core.nth.call(null,inst_41814,(0),null);
var inst_41816 = cljs.core.nth.call(null,inst_41814,(1),null);
var state_41926__$1 = (function (){var statearr_41998 = state_41926;
(statearr_41998[(26)] = inst_41815);

return statearr_41998;
})();
if(cljs.core.truth_(inst_41816)){
var statearr_41999_42059 = state_41926__$1;
(statearr_41999_42059[(1)] = (13));

} else {
var statearr_42000_42060 = state_41926__$1;
(statearr_42000_42060[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (18))){
var inst_41851 = (state_41926[(2)]);
var state_41926__$1 = state_41926;
var statearr_42001_42061 = state_41926__$1;
(statearr_42001_42061[(2)] = inst_41851);

(statearr_42001_42061[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (42))){
var state_41926__$1 = state_41926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41926__$1,(45),dchan);
} else {
if((state_val_41927 === (37))){
var inst_41894 = (state_41926[(23)]);
var inst_41794 = (state_41926[(11)]);
var inst_41885 = (state_41926[(25)]);
var inst_41894__$1 = cljs.core.first.call(null,inst_41885);
var inst_41895 = cljs.core.async.put_BANG_.call(null,inst_41894__$1,inst_41794,done);
var state_41926__$1 = (function (){var statearr_42002 = state_41926;
(statearr_42002[(23)] = inst_41894__$1);

return statearr_42002;
})();
if(cljs.core.truth_(inst_41895)){
var statearr_42003_42062 = state_41926__$1;
(statearr_42003_42062[(1)] = (39));

} else {
var statearr_42004_42063 = state_41926__$1;
(statearr_42004_42063[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (8))){
var inst_41805 = (state_41926[(15)]);
var inst_41806 = (state_41926[(16)]);
var inst_41808 = (inst_41806 < inst_41805);
var inst_41809 = inst_41808;
var state_41926__$1 = state_41926;
if(cljs.core.truth_(inst_41809)){
var statearr_42005_42064 = state_41926__$1;
(statearr_42005_42064[(1)] = (10));

} else {
var statearr_42006_42065 = state_41926__$1;
(statearr_42006_42065[(1)] = (11));

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
});})(c__34735__auto___42011,cs,m,dchan,dctr,done))
;
return ((function (switch__34712__auto__,c__34735__auto___42011,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34713__auto__ = null;
var cljs$core$async$mult_$_state_machine__34713__auto____0 = (function (){
var statearr_42007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42007[(0)] = cljs$core$async$mult_$_state_machine__34713__auto__);

(statearr_42007[(1)] = (1));

return statearr_42007;
});
var cljs$core$async$mult_$_state_machine__34713__auto____1 = (function (state_41926){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_41926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e42008){if((e42008 instanceof Object)){
var ex__34716__auto__ = e42008;
var statearr_42009_42066 = state_41926;
(statearr_42009_42066[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42067 = state_41926;
state_41926 = G__42067;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34713__auto__ = function(state_41926){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34713__auto____1.call(this,state_41926);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34713__auto____0;
cljs$core$async$mult_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34713__auto____1;
return cljs$core$async$mult_$_state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto___42011,cs,m,dchan,dctr,done))
})();
var state__34737__auto__ = (function (){var statearr_42010 = f__34736__auto__.call(null);
(statearr_42010[(6)] = c__34735__auto___42011);

return statearr_42010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto___42011,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__42069 = arguments.length;
switch (G__42069) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30780__auto__ = (((m == null))?null:m);
var m__30781__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30780__auto__)]);
if(!((m__30781__auto__ == null))){
return m__30781__auto__.call(null,m,ch);
} else {
var m__30781__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30781__auto____$1 == null))){
return m__30781__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30780__auto__ = (((m == null))?null:m);
var m__30781__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30780__auto__)]);
if(!((m__30781__auto__ == null))){
return m__30781__auto__.call(null,m,ch);
} else {
var m__30781__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30781__auto____$1 == null))){
return m__30781__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30780__auto__ = (((m == null))?null:m);
var m__30781__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30780__auto__)]);
if(!((m__30781__auto__ == null))){
return m__30781__auto__.call(null,m);
} else {
var m__30781__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30781__auto____$1 == null))){
return m__30781__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30780__auto__ = (((m == null))?null:m);
var m__30781__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30780__auto__)]);
if(!((m__30781__auto__ == null))){
return m__30781__auto__.call(null,m,state_map);
} else {
var m__30781__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30781__auto____$1 == null))){
return m__30781__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30780__auto__ = (((m == null))?null:m);
var m__30781__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30780__auto__)]);
if(!((m__30781__auto__ == null))){
return m__30781__auto__.call(null,m,mode);
} else {
var m__30781__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30781__auto____$1 == null))){
return m__30781__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31331__auto__ = [];
var len__31324__auto___42081 = arguments.length;
var i__31325__auto___42082 = (0);
while(true){
if((i__31325__auto___42082 < len__31324__auto___42081)){
args__31331__auto__.push((arguments[i__31325__auto___42082]));

var G__42083 = (i__31325__auto___42082 + (1));
i__31325__auto___42082 = G__42083;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((3) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31332__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42075){
var map__42076 = p__42075;
var map__42076__$1 = ((((!((map__42076 == null)))?((((map__42076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42076):map__42076);
var opts = map__42076__$1;
var statearr_42078_42084 = state;
(statearr_42078_42084[(1)] = cont_block);


var temp__5459__auto__ = cljs.core.async.do_alts.call(null,((function (map__42076,map__42076__$1,opts){
return (function (val){
var statearr_42079_42085 = state;
(statearr_42079_42085[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42076,map__42076__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5459__auto__)){
var cb = temp__5459__auto__;
var statearr_42080_42086 = state;
(statearr_42080_42086[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42071){
var G__42072 = cljs.core.first.call(null,seq42071);
var seq42071__$1 = cljs.core.next.call(null,seq42071);
var G__42073 = cljs.core.first.call(null,seq42071__$1);
var seq42071__$2 = cljs.core.next.call(null,seq42071__$1);
var G__42074 = cljs.core.first.call(null,seq42071__$2);
var seq42071__$3 = cljs.core.next.call(null,seq42071__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42072,G__42073,G__42074,seq42071__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async42087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42087 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta42088){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta42088 = meta42088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42089,meta42088__$1){
var self__ = this;
var _42089__$1 = this;
return (new cljs.core.async.t_cljs$core$async42087(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta42088__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42089){
var self__ = this;
var _42089__$1 = this;
return self__.meta42088;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42087.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42087.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42087.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42087.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42087.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42087.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42087.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42087.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42087.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta42088","meta42088",814977318,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42087";

cljs.core.async.t_cljs$core$async42087.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30718__auto__,writer__30719__auto__,opt__30720__auto__){
return cljs.core._write.call(null,writer__30719__auto__,"cljs.core.async/t_cljs$core$async42087");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async42087 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42087(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42088){
return (new cljs.core.async.t_cljs$core$async42087(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42088));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42087(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34735__auto___42251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto___42251,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto___42251,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42191){
var state_val_42192 = (state_42191[(1)]);
if((state_val_42192 === (7))){
var inst_42106 = (state_42191[(2)]);
var state_42191__$1 = state_42191;
var statearr_42193_42252 = state_42191__$1;
(statearr_42193_42252[(2)] = inst_42106);

(statearr_42193_42252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (20))){
var inst_42118 = (state_42191[(7)]);
var state_42191__$1 = state_42191;
var statearr_42194_42253 = state_42191__$1;
(statearr_42194_42253[(2)] = inst_42118);

(statearr_42194_42253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (27))){
var state_42191__$1 = state_42191;
var statearr_42195_42254 = state_42191__$1;
(statearr_42195_42254[(2)] = null);

(statearr_42195_42254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (1))){
var inst_42093 = (state_42191[(8)]);
var inst_42093__$1 = calc_state.call(null);
var inst_42095 = (inst_42093__$1 == null);
var inst_42096 = cljs.core.not.call(null,inst_42095);
var state_42191__$1 = (function (){var statearr_42196 = state_42191;
(statearr_42196[(8)] = inst_42093__$1);

return statearr_42196;
})();
if(inst_42096){
var statearr_42197_42255 = state_42191__$1;
(statearr_42197_42255[(1)] = (2));

} else {
var statearr_42198_42256 = state_42191__$1;
(statearr_42198_42256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (24))){
var inst_42165 = (state_42191[(9)]);
var inst_42151 = (state_42191[(10)]);
var inst_42142 = (state_42191[(11)]);
var inst_42165__$1 = inst_42142.call(null,inst_42151);
var state_42191__$1 = (function (){var statearr_42199 = state_42191;
(statearr_42199[(9)] = inst_42165__$1);

return statearr_42199;
})();
if(cljs.core.truth_(inst_42165__$1)){
var statearr_42200_42257 = state_42191__$1;
(statearr_42200_42257[(1)] = (29));

} else {
var statearr_42201_42258 = state_42191__$1;
(statearr_42201_42258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (4))){
var inst_42109 = (state_42191[(2)]);
var state_42191__$1 = state_42191;
if(cljs.core.truth_(inst_42109)){
var statearr_42202_42259 = state_42191__$1;
(statearr_42202_42259[(1)] = (8));

} else {
var statearr_42203_42260 = state_42191__$1;
(statearr_42203_42260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (15))){
var inst_42136 = (state_42191[(2)]);
var state_42191__$1 = state_42191;
if(cljs.core.truth_(inst_42136)){
var statearr_42204_42261 = state_42191__$1;
(statearr_42204_42261[(1)] = (19));

} else {
var statearr_42205_42262 = state_42191__$1;
(statearr_42205_42262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (21))){
var inst_42141 = (state_42191[(12)]);
var inst_42141__$1 = (state_42191[(2)]);
var inst_42142 = cljs.core.get.call(null,inst_42141__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42143 = cljs.core.get.call(null,inst_42141__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42144 = cljs.core.get.call(null,inst_42141__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42191__$1 = (function (){var statearr_42206 = state_42191;
(statearr_42206[(11)] = inst_42142);

(statearr_42206[(13)] = inst_42143);

(statearr_42206[(12)] = inst_42141__$1);

return statearr_42206;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42191__$1,(22),inst_42144);
} else {
if((state_val_42192 === (31))){
var inst_42173 = (state_42191[(2)]);
var state_42191__$1 = state_42191;
if(cljs.core.truth_(inst_42173)){
var statearr_42207_42263 = state_42191__$1;
(statearr_42207_42263[(1)] = (32));

} else {
var statearr_42208_42264 = state_42191__$1;
(statearr_42208_42264[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (32))){
var inst_42150 = (state_42191[(14)]);
var state_42191__$1 = state_42191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42191__$1,(35),out,inst_42150);
} else {
if((state_val_42192 === (33))){
var inst_42141 = (state_42191[(12)]);
var inst_42118 = inst_42141;
var state_42191__$1 = (function (){var statearr_42209 = state_42191;
(statearr_42209[(7)] = inst_42118);

return statearr_42209;
})();
var statearr_42210_42265 = state_42191__$1;
(statearr_42210_42265[(2)] = null);

(statearr_42210_42265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (13))){
var inst_42118 = (state_42191[(7)]);
var inst_42125 = inst_42118.cljs$lang$protocol_mask$partition0$;
var inst_42126 = (inst_42125 & (64));
var inst_42127 = inst_42118.cljs$core$ISeq$;
var inst_42128 = (cljs.core.PROTOCOL_SENTINEL === inst_42127);
var inst_42129 = (inst_42126) || (inst_42128);
var state_42191__$1 = state_42191;
if(cljs.core.truth_(inst_42129)){
var statearr_42211_42266 = state_42191__$1;
(statearr_42211_42266[(1)] = (16));

} else {
var statearr_42212_42267 = state_42191__$1;
(statearr_42212_42267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (22))){
var inst_42151 = (state_42191[(10)]);
var inst_42150 = (state_42191[(14)]);
var inst_42149 = (state_42191[(2)]);
var inst_42150__$1 = cljs.core.nth.call(null,inst_42149,(0),null);
var inst_42151__$1 = cljs.core.nth.call(null,inst_42149,(1),null);
var inst_42152 = (inst_42150__$1 == null);
var inst_42153 = cljs.core._EQ_.call(null,inst_42151__$1,change);
var inst_42154 = (inst_42152) || (inst_42153);
var state_42191__$1 = (function (){var statearr_42213 = state_42191;
(statearr_42213[(10)] = inst_42151__$1);

(statearr_42213[(14)] = inst_42150__$1);

return statearr_42213;
})();
if(cljs.core.truth_(inst_42154)){
var statearr_42214_42268 = state_42191__$1;
(statearr_42214_42268[(1)] = (23));

} else {
var statearr_42215_42269 = state_42191__$1;
(statearr_42215_42269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (36))){
var inst_42141 = (state_42191[(12)]);
var inst_42118 = inst_42141;
var state_42191__$1 = (function (){var statearr_42216 = state_42191;
(statearr_42216[(7)] = inst_42118);

return statearr_42216;
})();
var statearr_42217_42270 = state_42191__$1;
(statearr_42217_42270[(2)] = null);

(statearr_42217_42270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (29))){
var inst_42165 = (state_42191[(9)]);
var state_42191__$1 = state_42191;
var statearr_42218_42271 = state_42191__$1;
(statearr_42218_42271[(2)] = inst_42165);

(statearr_42218_42271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (6))){
var state_42191__$1 = state_42191;
var statearr_42219_42272 = state_42191__$1;
(statearr_42219_42272[(2)] = false);

(statearr_42219_42272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (28))){
var inst_42161 = (state_42191[(2)]);
var inst_42162 = calc_state.call(null);
var inst_42118 = inst_42162;
var state_42191__$1 = (function (){var statearr_42220 = state_42191;
(statearr_42220[(7)] = inst_42118);

(statearr_42220[(15)] = inst_42161);

return statearr_42220;
})();
var statearr_42221_42273 = state_42191__$1;
(statearr_42221_42273[(2)] = null);

(statearr_42221_42273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (25))){
var inst_42187 = (state_42191[(2)]);
var state_42191__$1 = state_42191;
var statearr_42222_42274 = state_42191__$1;
(statearr_42222_42274[(2)] = inst_42187);

(statearr_42222_42274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (34))){
var inst_42185 = (state_42191[(2)]);
var state_42191__$1 = state_42191;
var statearr_42223_42275 = state_42191__$1;
(statearr_42223_42275[(2)] = inst_42185);

(statearr_42223_42275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (17))){
var state_42191__$1 = state_42191;
var statearr_42224_42276 = state_42191__$1;
(statearr_42224_42276[(2)] = false);

(statearr_42224_42276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (3))){
var state_42191__$1 = state_42191;
var statearr_42225_42277 = state_42191__$1;
(statearr_42225_42277[(2)] = false);

(statearr_42225_42277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (12))){
var inst_42189 = (state_42191[(2)]);
var state_42191__$1 = state_42191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42191__$1,inst_42189);
} else {
if((state_val_42192 === (2))){
var inst_42093 = (state_42191[(8)]);
var inst_42098 = inst_42093.cljs$lang$protocol_mask$partition0$;
var inst_42099 = (inst_42098 & (64));
var inst_42100 = inst_42093.cljs$core$ISeq$;
var inst_42101 = (cljs.core.PROTOCOL_SENTINEL === inst_42100);
var inst_42102 = (inst_42099) || (inst_42101);
var state_42191__$1 = state_42191;
if(cljs.core.truth_(inst_42102)){
var statearr_42226_42278 = state_42191__$1;
(statearr_42226_42278[(1)] = (5));

} else {
var statearr_42227_42279 = state_42191__$1;
(statearr_42227_42279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (23))){
var inst_42150 = (state_42191[(14)]);
var inst_42156 = (inst_42150 == null);
var state_42191__$1 = state_42191;
if(cljs.core.truth_(inst_42156)){
var statearr_42228_42280 = state_42191__$1;
(statearr_42228_42280[(1)] = (26));

} else {
var statearr_42229_42281 = state_42191__$1;
(statearr_42229_42281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (35))){
var inst_42176 = (state_42191[(2)]);
var state_42191__$1 = state_42191;
if(cljs.core.truth_(inst_42176)){
var statearr_42230_42282 = state_42191__$1;
(statearr_42230_42282[(1)] = (36));

} else {
var statearr_42231_42283 = state_42191__$1;
(statearr_42231_42283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (19))){
var inst_42118 = (state_42191[(7)]);
var inst_42138 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42118);
var state_42191__$1 = state_42191;
var statearr_42232_42284 = state_42191__$1;
(statearr_42232_42284[(2)] = inst_42138);

(statearr_42232_42284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (11))){
var inst_42118 = (state_42191[(7)]);
var inst_42122 = (inst_42118 == null);
var inst_42123 = cljs.core.not.call(null,inst_42122);
var state_42191__$1 = state_42191;
if(inst_42123){
var statearr_42233_42285 = state_42191__$1;
(statearr_42233_42285[(1)] = (13));

} else {
var statearr_42234_42286 = state_42191__$1;
(statearr_42234_42286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (9))){
var inst_42093 = (state_42191[(8)]);
var state_42191__$1 = state_42191;
var statearr_42235_42287 = state_42191__$1;
(statearr_42235_42287[(2)] = inst_42093);

(statearr_42235_42287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (5))){
var state_42191__$1 = state_42191;
var statearr_42236_42288 = state_42191__$1;
(statearr_42236_42288[(2)] = true);

(statearr_42236_42288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (14))){
var state_42191__$1 = state_42191;
var statearr_42237_42289 = state_42191__$1;
(statearr_42237_42289[(2)] = false);

(statearr_42237_42289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (26))){
var inst_42151 = (state_42191[(10)]);
var inst_42158 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42151);
var state_42191__$1 = state_42191;
var statearr_42238_42290 = state_42191__$1;
(statearr_42238_42290[(2)] = inst_42158);

(statearr_42238_42290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (16))){
var state_42191__$1 = state_42191;
var statearr_42239_42291 = state_42191__$1;
(statearr_42239_42291[(2)] = true);

(statearr_42239_42291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (38))){
var inst_42181 = (state_42191[(2)]);
var state_42191__$1 = state_42191;
var statearr_42240_42292 = state_42191__$1;
(statearr_42240_42292[(2)] = inst_42181);

(statearr_42240_42292[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (30))){
var inst_42151 = (state_42191[(10)]);
var inst_42142 = (state_42191[(11)]);
var inst_42143 = (state_42191[(13)]);
var inst_42168 = cljs.core.empty_QMARK_.call(null,inst_42142);
var inst_42169 = inst_42143.call(null,inst_42151);
var inst_42170 = cljs.core.not.call(null,inst_42169);
var inst_42171 = (inst_42168) && (inst_42170);
var state_42191__$1 = state_42191;
var statearr_42241_42293 = state_42191__$1;
(statearr_42241_42293[(2)] = inst_42171);

(statearr_42241_42293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (10))){
var inst_42093 = (state_42191[(8)]);
var inst_42114 = (state_42191[(2)]);
var inst_42115 = cljs.core.get.call(null,inst_42114,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42116 = cljs.core.get.call(null,inst_42114,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42117 = cljs.core.get.call(null,inst_42114,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42118 = inst_42093;
var state_42191__$1 = (function (){var statearr_42242 = state_42191;
(statearr_42242[(16)] = inst_42116);

(statearr_42242[(7)] = inst_42118);

(statearr_42242[(17)] = inst_42115);

(statearr_42242[(18)] = inst_42117);

return statearr_42242;
})();
var statearr_42243_42294 = state_42191__$1;
(statearr_42243_42294[(2)] = null);

(statearr_42243_42294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (18))){
var inst_42133 = (state_42191[(2)]);
var state_42191__$1 = state_42191;
var statearr_42244_42295 = state_42191__$1;
(statearr_42244_42295[(2)] = inst_42133);

(statearr_42244_42295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (37))){
var state_42191__$1 = state_42191;
var statearr_42245_42296 = state_42191__$1;
(statearr_42245_42296[(2)] = null);

(statearr_42245_42296[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42192 === (8))){
var inst_42093 = (state_42191[(8)]);
var inst_42111 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42093);
var state_42191__$1 = state_42191;
var statearr_42246_42297 = state_42191__$1;
(statearr_42246_42297[(2)] = inst_42111);

(statearr_42246_42297[(1)] = (10));


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
});})(c__34735__auto___42251,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34712__auto__,c__34735__auto___42251,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34713__auto__ = null;
var cljs$core$async$mix_$_state_machine__34713__auto____0 = (function (){
var statearr_42247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42247[(0)] = cljs$core$async$mix_$_state_machine__34713__auto__);

(statearr_42247[(1)] = (1));

return statearr_42247;
});
var cljs$core$async$mix_$_state_machine__34713__auto____1 = (function (state_42191){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_42191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e42248){if((e42248 instanceof Object)){
var ex__34716__auto__ = e42248;
var statearr_42249_42298 = state_42191;
(statearr_42249_42298[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42299 = state_42191;
state_42191 = G__42299;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34713__auto__ = function(state_42191){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34713__auto____1.call(this,state_42191);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34713__auto____0;
cljs$core$async$mix_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34713__auto____1;
return cljs$core$async$mix_$_state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto___42251,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34737__auto__ = (function (){var statearr_42250 = f__34736__auto__.call(null);
(statearr_42250[(6)] = c__34735__auto___42251);

return statearr_42250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto___42251,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30780__auto__ = (((p == null))?null:p);
var m__30781__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30780__auto__)]);
if(!((m__30781__auto__ == null))){
return m__30781__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30781__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30781__auto____$1 == null))){
return m__30781__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30780__auto__ = (((p == null))?null:p);
var m__30781__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30780__auto__)]);
if(!((m__30781__auto__ == null))){
return m__30781__auto__.call(null,p,v,ch);
} else {
var m__30781__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30781__auto____$1 == null))){
return m__30781__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__42301 = arguments.length;
switch (G__42301) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30780__auto__ = (((p == null))?null:p);
var m__30781__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30780__auto__)]);
if(!((m__30781__auto__ == null))){
return m__30781__auto__.call(null,p);
} else {
var m__30781__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30781__auto____$1 == null))){
return m__30781__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30780__auto__ = (((p == null))?null:p);
var m__30781__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30780__auto__)]);
if(!((m__30781__auto__ == null))){
return m__30781__auto__.call(null,p,v);
} else {
var m__30781__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30781__auto____$1 == null))){
return m__30781__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__42305 = arguments.length;
switch (G__42305) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30047__auto__)){
return or__30047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30047__auto__,mults){
return (function (p1__42303_SHARP_){
if(cljs.core.truth_(p1__42303_SHARP_.call(null,topic))){
return p1__42303_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42303_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async42306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42306 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42307){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42307 = meta42307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42308,meta42307__$1){
var self__ = this;
var _42308__$1 = this;
return (new cljs.core.async.t_cljs$core$async42306(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42307__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42308){
var self__ = this;
var _42308__$1 = this;
return self__.meta42307;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5459__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5459__auto__)){
var m = temp__5459__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42306.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42307","meta42307",1331820192,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42306.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42306";

cljs.core.async.t_cljs$core$async42306.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30718__auto__,writer__30719__auto__,opt__30720__auto__){
return cljs.core._write.call(null,writer__30719__auto__,"cljs.core.async/t_cljs$core$async42306");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async42306 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42306(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42307){
return (new cljs.core.async.t_cljs$core$async42306(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42307));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42306(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34735__auto___42426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto___42426,mults,ensure_mult,p){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto___42426,mults,ensure_mult,p){
return (function (state_42380){
var state_val_42381 = (state_42380[(1)]);
if((state_val_42381 === (7))){
var inst_42376 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
var statearr_42382_42427 = state_42380__$1;
(statearr_42382_42427[(2)] = inst_42376);

(statearr_42382_42427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (20))){
var state_42380__$1 = state_42380;
var statearr_42383_42428 = state_42380__$1;
(statearr_42383_42428[(2)] = null);

(statearr_42383_42428[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (1))){
var state_42380__$1 = state_42380;
var statearr_42384_42429 = state_42380__$1;
(statearr_42384_42429[(2)] = null);

(statearr_42384_42429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (24))){
var inst_42359 = (state_42380[(7)]);
var inst_42368 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42359);
var state_42380__$1 = state_42380;
var statearr_42385_42430 = state_42380__$1;
(statearr_42385_42430[(2)] = inst_42368);

(statearr_42385_42430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (4))){
var inst_42311 = (state_42380[(8)]);
var inst_42311__$1 = (state_42380[(2)]);
var inst_42312 = (inst_42311__$1 == null);
var state_42380__$1 = (function (){var statearr_42386 = state_42380;
(statearr_42386[(8)] = inst_42311__$1);

return statearr_42386;
})();
if(cljs.core.truth_(inst_42312)){
var statearr_42387_42431 = state_42380__$1;
(statearr_42387_42431[(1)] = (5));

} else {
var statearr_42388_42432 = state_42380__$1;
(statearr_42388_42432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (15))){
var inst_42353 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
var statearr_42389_42433 = state_42380__$1;
(statearr_42389_42433[(2)] = inst_42353);

(statearr_42389_42433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (21))){
var inst_42373 = (state_42380[(2)]);
var state_42380__$1 = (function (){var statearr_42390 = state_42380;
(statearr_42390[(9)] = inst_42373);

return statearr_42390;
})();
var statearr_42391_42434 = state_42380__$1;
(statearr_42391_42434[(2)] = null);

(statearr_42391_42434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (13))){
var inst_42335 = (state_42380[(10)]);
var inst_42337 = cljs.core.chunked_seq_QMARK_.call(null,inst_42335);
var state_42380__$1 = state_42380;
if(inst_42337){
var statearr_42392_42435 = state_42380__$1;
(statearr_42392_42435[(1)] = (16));

} else {
var statearr_42393_42436 = state_42380__$1;
(statearr_42393_42436[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (22))){
var inst_42365 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
if(cljs.core.truth_(inst_42365)){
var statearr_42394_42437 = state_42380__$1;
(statearr_42394_42437[(1)] = (23));

} else {
var statearr_42395_42438 = state_42380__$1;
(statearr_42395_42438[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (6))){
var inst_42359 = (state_42380[(7)]);
var inst_42311 = (state_42380[(8)]);
var inst_42361 = (state_42380[(11)]);
var inst_42359__$1 = topic_fn.call(null,inst_42311);
var inst_42360 = cljs.core.deref.call(null,mults);
var inst_42361__$1 = cljs.core.get.call(null,inst_42360,inst_42359__$1);
var state_42380__$1 = (function (){var statearr_42396 = state_42380;
(statearr_42396[(7)] = inst_42359__$1);

(statearr_42396[(11)] = inst_42361__$1);

return statearr_42396;
})();
if(cljs.core.truth_(inst_42361__$1)){
var statearr_42397_42439 = state_42380__$1;
(statearr_42397_42439[(1)] = (19));

} else {
var statearr_42398_42440 = state_42380__$1;
(statearr_42398_42440[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (25))){
var inst_42370 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
var statearr_42399_42441 = state_42380__$1;
(statearr_42399_42441[(2)] = inst_42370);

(statearr_42399_42441[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (17))){
var inst_42335 = (state_42380[(10)]);
var inst_42344 = cljs.core.first.call(null,inst_42335);
var inst_42345 = cljs.core.async.muxch_STAR_.call(null,inst_42344);
var inst_42346 = cljs.core.async.close_BANG_.call(null,inst_42345);
var inst_42347 = cljs.core.next.call(null,inst_42335);
var inst_42321 = inst_42347;
var inst_42322 = null;
var inst_42323 = (0);
var inst_42324 = (0);
var state_42380__$1 = (function (){var statearr_42400 = state_42380;
(statearr_42400[(12)] = inst_42321);

(statearr_42400[(13)] = inst_42323);

(statearr_42400[(14)] = inst_42322);

(statearr_42400[(15)] = inst_42324);

(statearr_42400[(16)] = inst_42346);

return statearr_42400;
})();
var statearr_42401_42442 = state_42380__$1;
(statearr_42401_42442[(2)] = null);

(statearr_42401_42442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (3))){
var inst_42378 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42380__$1,inst_42378);
} else {
if((state_val_42381 === (12))){
var inst_42355 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
var statearr_42402_42443 = state_42380__$1;
(statearr_42402_42443[(2)] = inst_42355);

(statearr_42402_42443[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (2))){
var state_42380__$1 = state_42380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42380__$1,(4),ch);
} else {
if((state_val_42381 === (23))){
var state_42380__$1 = state_42380;
var statearr_42403_42444 = state_42380__$1;
(statearr_42403_42444[(2)] = null);

(statearr_42403_42444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (19))){
var inst_42311 = (state_42380[(8)]);
var inst_42361 = (state_42380[(11)]);
var inst_42363 = cljs.core.async.muxch_STAR_.call(null,inst_42361);
var state_42380__$1 = state_42380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42380__$1,(22),inst_42363,inst_42311);
} else {
if((state_val_42381 === (11))){
var inst_42321 = (state_42380[(12)]);
var inst_42335 = (state_42380[(10)]);
var inst_42335__$1 = cljs.core.seq.call(null,inst_42321);
var state_42380__$1 = (function (){var statearr_42404 = state_42380;
(statearr_42404[(10)] = inst_42335__$1);

return statearr_42404;
})();
if(inst_42335__$1){
var statearr_42405_42445 = state_42380__$1;
(statearr_42405_42445[(1)] = (13));

} else {
var statearr_42406_42446 = state_42380__$1;
(statearr_42406_42446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (9))){
var inst_42357 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
var statearr_42407_42447 = state_42380__$1;
(statearr_42407_42447[(2)] = inst_42357);

(statearr_42407_42447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (5))){
var inst_42318 = cljs.core.deref.call(null,mults);
var inst_42319 = cljs.core.vals.call(null,inst_42318);
var inst_42320 = cljs.core.seq.call(null,inst_42319);
var inst_42321 = inst_42320;
var inst_42322 = null;
var inst_42323 = (0);
var inst_42324 = (0);
var state_42380__$1 = (function (){var statearr_42408 = state_42380;
(statearr_42408[(12)] = inst_42321);

(statearr_42408[(13)] = inst_42323);

(statearr_42408[(14)] = inst_42322);

(statearr_42408[(15)] = inst_42324);

return statearr_42408;
})();
var statearr_42409_42448 = state_42380__$1;
(statearr_42409_42448[(2)] = null);

(statearr_42409_42448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (14))){
var state_42380__$1 = state_42380;
var statearr_42413_42449 = state_42380__$1;
(statearr_42413_42449[(2)] = null);

(statearr_42413_42449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (16))){
var inst_42335 = (state_42380[(10)]);
var inst_42339 = cljs.core.chunk_first.call(null,inst_42335);
var inst_42340 = cljs.core.chunk_rest.call(null,inst_42335);
var inst_42341 = cljs.core.count.call(null,inst_42339);
var inst_42321 = inst_42340;
var inst_42322 = inst_42339;
var inst_42323 = inst_42341;
var inst_42324 = (0);
var state_42380__$1 = (function (){var statearr_42414 = state_42380;
(statearr_42414[(12)] = inst_42321);

(statearr_42414[(13)] = inst_42323);

(statearr_42414[(14)] = inst_42322);

(statearr_42414[(15)] = inst_42324);

return statearr_42414;
})();
var statearr_42415_42450 = state_42380__$1;
(statearr_42415_42450[(2)] = null);

(statearr_42415_42450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (10))){
var inst_42321 = (state_42380[(12)]);
var inst_42323 = (state_42380[(13)]);
var inst_42322 = (state_42380[(14)]);
var inst_42324 = (state_42380[(15)]);
var inst_42329 = cljs.core._nth.call(null,inst_42322,inst_42324);
var inst_42330 = cljs.core.async.muxch_STAR_.call(null,inst_42329);
var inst_42331 = cljs.core.async.close_BANG_.call(null,inst_42330);
var inst_42332 = (inst_42324 + (1));
var tmp42410 = inst_42321;
var tmp42411 = inst_42323;
var tmp42412 = inst_42322;
var inst_42321__$1 = tmp42410;
var inst_42322__$1 = tmp42412;
var inst_42323__$1 = tmp42411;
var inst_42324__$1 = inst_42332;
var state_42380__$1 = (function (){var statearr_42416 = state_42380;
(statearr_42416[(12)] = inst_42321__$1);

(statearr_42416[(17)] = inst_42331);

(statearr_42416[(13)] = inst_42323__$1);

(statearr_42416[(14)] = inst_42322__$1);

(statearr_42416[(15)] = inst_42324__$1);

return statearr_42416;
})();
var statearr_42417_42451 = state_42380__$1;
(statearr_42417_42451[(2)] = null);

(statearr_42417_42451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (18))){
var inst_42350 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
var statearr_42418_42452 = state_42380__$1;
(statearr_42418_42452[(2)] = inst_42350);

(statearr_42418_42452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (8))){
var inst_42323 = (state_42380[(13)]);
var inst_42324 = (state_42380[(15)]);
var inst_42326 = (inst_42324 < inst_42323);
var inst_42327 = inst_42326;
var state_42380__$1 = state_42380;
if(cljs.core.truth_(inst_42327)){
var statearr_42419_42453 = state_42380__$1;
(statearr_42419_42453[(1)] = (10));

} else {
var statearr_42420_42454 = state_42380__$1;
(statearr_42420_42454[(1)] = (11));

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
});})(c__34735__auto___42426,mults,ensure_mult,p))
;
return ((function (switch__34712__auto__,c__34735__auto___42426,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34713__auto__ = null;
var cljs$core$async$state_machine__34713__auto____0 = (function (){
var statearr_42421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42421[(0)] = cljs$core$async$state_machine__34713__auto__);

(statearr_42421[(1)] = (1));

return statearr_42421;
});
var cljs$core$async$state_machine__34713__auto____1 = (function (state_42380){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_42380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e42422){if((e42422 instanceof Object)){
var ex__34716__auto__ = e42422;
var statearr_42423_42455 = state_42380;
(statearr_42423_42455[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42456 = state_42380;
state_42380 = G__42456;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$state_machine__34713__auto__ = function(state_42380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34713__auto____1.call(this,state_42380);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34713__auto____0;
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34713__auto____1;
return cljs$core$async$state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto___42426,mults,ensure_mult,p))
})();
var state__34737__auto__ = (function (){var statearr_42424 = f__34736__auto__.call(null);
(statearr_42424[(6)] = c__34735__auto___42426);

return statearr_42424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto___42426,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__42458 = arguments.length;
switch (G__42458) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__42461 = arguments.length;
switch (G__42461) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__42464 = arguments.length;
switch (G__42464) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__34735__auto___42531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto___42531,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto___42531,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42503){
var state_val_42504 = (state_42503[(1)]);
if((state_val_42504 === (7))){
var state_42503__$1 = state_42503;
var statearr_42505_42532 = state_42503__$1;
(statearr_42505_42532[(2)] = null);

(statearr_42505_42532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (1))){
var state_42503__$1 = state_42503;
var statearr_42506_42533 = state_42503__$1;
(statearr_42506_42533[(2)] = null);

(statearr_42506_42533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (4))){
var inst_42467 = (state_42503[(7)]);
var inst_42469 = (inst_42467 < cnt);
var state_42503__$1 = state_42503;
if(cljs.core.truth_(inst_42469)){
var statearr_42507_42534 = state_42503__$1;
(statearr_42507_42534[(1)] = (6));

} else {
var statearr_42508_42535 = state_42503__$1;
(statearr_42508_42535[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (15))){
var inst_42499 = (state_42503[(2)]);
var state_42503__$1 = state_42503;
var statearr_42509_42536 = state_42503__$1;
(statearr_42509_42536[(2)] = inst_42499);

(statearr_42509_42536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (13))){
var inst_42492 = cljs.core.async.close_BANG_.call(null,out);
var state_42503__$1 = state_42503;
var statearr_42510_42537 = state_42503__$1;
(statearr_42510_42537[(2)] = inst_42492);

(statearr_42510_42537[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (6))){
var state_42503__$1 = state_42503;
var statearr_42511_42538 = state_42503__$1;
(statearr_42511_42538[(2)] = null);

(statearr_42511_42538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (3))){
var inst_42501 = (state_42503[(2)]);
var state_42503__$1 = state_42503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42503__$1,inst_42501);
} else {
if((state_val_42504 === (12))){
var inst_42489 = (state_42503[(8)]);
var inst_42489__$1 = (state_42503[(2)]);
var inst_42490 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42489__$1);
var state_42503__$1 = (function (){var statearr_42512 = state_42503;
(statearr_42512[(8)] = inst_42489__$1);

return statearr_42512;
})();
if(cljs.core.truth_(inst_42490)){
var statearr_42513_42539 = state_42503__$1;
(statearr_42513_42539[(1)] = (13));

} else {
var statearr_42514_42540 = state_42503__$1;
(statearr_42514_42540[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (2))){
var inst_42466 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42467 = (0);
var state_42503__$1 = (function (){var statearr_42515 = state_42503;
(statearr_42515[(9)] = inst_42466);

(statearr_42515[(7)] = inst_42467);

return statearr_42515;
})();
var statearr_42516_42541 = state_42503__$1;
(statearr_42516_42541[(2)] = null);

(statearr_42516_42541[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (11))){
var inst_42467 = (state_42503[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42503,(10),Object,null,(9));
var inst_42476 = chs__$1.call(null,inst_42467);
var inst_42477 = done.call(null,inst_42467);
var inst_42478 = cljs.core.async.take_BANG_.call(null,inst_42476,inst_42477);
var state_42503__$1 = state_42503;
var statearr_42517_42542 = state_42503__$1;
(statearr_42517_42542[(2)] = inst_42478);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42503__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (9))){
var inst_42467 = (state_42503[(7)]);
var inst_42480 = (state_42503[(2)]);
var inst_42481 = (inst_42467 + (1));
var inst_42467__$1 = inst_42481;
var state_42503__$1 = (function (){var statearr_42518 = state_42503;
(statearr_42518[(7)] = inst_42467__$1);

(statearr_42518[(10)] = inst_42480);

return statearr_42518;
})();
var statearr_42519_42543 = state_42503__$1;
(statearr_42519_42543[(2)] = null);

(statearr_42519_42543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (5))){
var inst_42487 = (state_42503[(2)]);
var state_42503__$1 = (function (){var statearr_42520 = state_42503;
(statearr_42520[(11)] = inst_42487);

return statearr_42520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42503__$1,(12),dchan);
} else {
if((state_val_42504 === (14))){
var inst_42489 = (state_42503[(8)]);
var inst_42494 = cljs.core.apply.call(null,f,inst_42489);
var state_42503__$1 = state_42503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42503__$1,(16),out,inst_42494);
} else {
if((state_val_42504 === (16))){
var inst_42496 = (state_42503[(2)]);
var state_42503__$1 = (function (){var statearr_42521 = state_42503;
(statearr_42521[(12)] = inst_42496);

return statearr_42521;
})();
var statearr_42522_42544 = state_42503__$1;
(statearr_42522_42544[(2)] = null);

(statearr_42522_42544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (10))){
var inst_42471 = (state_42503[(2)]);
var inst_42472 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42503__$1 = (function (){var statearr_42523 = state_42503;
(statearr_42523[(13)] = inst_42471);

return statearr_42523;
})();
var statearr_42524_42545 = state_42503__$1;
(statearr_42524_42545[(2)] = inst_42472);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42503__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (8))){
var inst_42485 = (state_42503[(2)]);
var state_42503__$1 = state_42503;
var statearr_42525_42546 = state_42503__$1;
(statearr_42525_42546[(2)] = inst_42485);

(statearr_42525_42546[(1)] = (5));


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
});})(c__34735__auto___42531,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34712__auto__,c__34735__auto___42531,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34713__auto__ = null;
var cljs$core$async$state_machine__34713__auto____0 = (function (){
var statearr_42526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42526[(0)] = cljs$core$async$state_machine__34713__auto__);

(statearr_42526[(1)] = (1));

return statearr_42526;
});
var cljs$core$async$state_machine__34713__auto____1 = (function (state_42503){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_42503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e42527){if((e42527 instanceof Object)){
var ex__34716__auto__ = e42527;
var statearr_42528_42547 = state_42503;
(statearr_42528_42547[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42548 = state_42503;
state_42503 = G__42548;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$state_machine__34713__auto__ = function(state_42503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34713__auto____1.call(this,state_42503);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34713__auto____0;
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34713__auto____1;
return cljs$core$async$state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto___42531,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34737__auto__ = (function (){var statearr_42529 = f__34736__auto__.call(null);
(statearr_42529[(6)] = c__34735__auto___42531);

return statearr_42529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto___42531,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__42551 = arguments.length;
switch (G__42551) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34735__auto___42605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto___42605,out){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto___42605,out){
return (function (state_42583){
var state_val_42584 = (state_42583[(1)]);
if((state_val_42584 === (7))){
var inst_42563 = (state_42583[(7)]);
var inst_42562 = (state_42583[(8)]);
var inst_42562__$1 = (state_42583[(2)]);
var inst_42563__$1 = cljs.core.nth.call(null,inst_42562__$1,(0),null);
var inst_42564 = cljs.core.nth.call(null,inst_42562__$1,(1),null);
var inst_42565 = (inst_42563__$1 == null);
var state_42583__$1 = (function (){var statearr_42585 = state_42583;
(statearr_42585[(7)] = inst_42563__$1);

(statearr_42585[(9)] = inst_42564);

(statearr_42585[(8)] = inst_42562__$1);

return statearr_42585;
})();
if(cljs.core.truth_(inst_42565)){
var statearr_42586_42606 = state_42583__$1;
(statearr_42586_42606[(1)] = (8));

} else {
var statearr_42587_42607 = state_42583__$1;
(statearr_42587_42607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42584 === (1))){
var inst_42552 = cljs.core.vec.call(null,chs);
var inst_42553 = inst_42552;
var state_42583__$1 = (function (){var statearr_42588 = state_42583;
(statearr_42588[(10)] = inst_42553);

return statearr_42588;
})();
var statearr_42589_42608 = state_42583__$1;
(statearr_42589_42608[(2)] = null);

(statearr_42589_42608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42584 === (4))){
var inst_42553 = (state_42583[(10)]);
var state_42583__$1 = state_42583;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42583__$1,(7),inst_42553);
} else {
if((state_val_42584 === (6))){
var inst_42579 = (state_42583[(2)]);
var state_42583__$1 = state_42583;
var statearr_42590_42609 = state_42583__$1;
(statearr_42590_42609[(2)] = inst_42579);

(statearr_42590_42609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42584 === (3))){
var inst_42581 = (state_42583[(2)]);
var state_42583__$1 = state_42583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42583__$1,inst_42581);
} else {
if((state_val_42584 === (2))){
var inst_42553 = (state_42583[(10)]);
var inst_42555 = cljs.core.count.call(null,inst_42553);
var inst_42556 = (inst_42555 > (0));
var state_42583__$1 = state_42583;
if(cljs.core.truth_(inst_42556)){
var statearr_42592_42610 = state_42583__$1;
(statearr_42592_42610[(1)] = (4));

} else {
var statearr_42593_42611 = state_42583__$1;
(statearr_42593_42611[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42584 === (11))){
var inst_42553 = (state_42583[(10)]);
var inst_42572 = (state_42583[(2)]);
var tmp42591 = inst_42553;
var inst_42553__$1 = tmp42591;
var state_42583__$1 = (function (){var statearr_42594 = state_42583;
(statearr_42594[(11)] = inst_42572);

(statearr_42594[(10)] = inst_42553__$1);

return statearr_42594;
})();
var statearr_42595_42612 = state_42583__$1;
(statearr_42595_42612[(2)] = null);

(statearr_42595_42612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42584 === (9))){
var inst_42563 = (state_42583[(7)]);
var state_42583__$1 = state_42583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42583__$1,(11),out,inst_42563);
} else {
if((state_val_42584 === (5))){
var inst_42577 = cljs.core.async.close_BANG_.call(null,out);
var state_42583__$1 = state_42583;
var statearr_42596_42613 = state_42583__$1;
(statearr_42596_42613[(2)] = inst_42577);

(statearr_42596_42613[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42584 === (10))){
var inst_42575 = (state_42583[(2)]);
var state_42583__$1 = state_42583;
var statearr_42597_42614 = state_42583__$1;
(statearr_42597_42614[(2)] = inst_42575);

(statearr_42597_42614[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42584 === (8))){
var inst_42553 = (state_42583[(10)]);
var inst_42563 = (state_42583[(7)]);
var inst_42564 = (state_42583[(9)]);
var inst_42562 = (state_42583[(8)]);
var inst_42567 = (function (){var cs = inst_42553;
var vec__42558 = inst_42562;
var v = inst_42563;
var c = inst_42564;
return ((function (cs,vec__42558,v,c,inst_42553,inst_42563,inst_42564,inst_42562,state_val_42584,c__34735__auto___42605,out){
return (function (p1__42549_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42549_SHARP_);
});
;})(cs,vec__42558,v,c,inst_42553,inst_42563,inst_42564,inst_42562,state_val_42584,c__34735__auto___42605,out))
})();
var inst_42568 = cljs.core.filterv.call(null,inst_42567,inst_42553);
var inst_42553__$1 = inst_42568;
var state_42583__$1 = (function (){var statearr_42598 = state_42583;
(statearr_42598[(10)] = inst_42553__$1);

return statearr_42598;
})();
var statearr_42599_42615 = state_42583__$1;
(statearr_42599_42615[(2)] = null);

(statearr_42599_42615[(1)] = (2));


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
});})(c__34735__auto___42605,out))
;
return ((function (switch__34712__auto__,c__34735__auto___42605,out){
return (function() {
var cljs$core$async$state_machine__34713__auto__ = null;
var cljs$core$async$state_machine__34713__auto____0 = (function (){
var statearr_42600 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42600[(0)] = cljs$core$async$state_machine__34713__auto__);

(statearr_42600[(1)] = (1));

return statearr_42600;
});
var cljs$core$async$state_machine__34713__auto____1 = (function (state_42583){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_42583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e42601){if((e42601 instanceof Object)){
var ex__34716__auto__ = e42601;
var statearr_42602_42616 = state_42583;
(statearr_42602_42616[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42617 = state_42583;
state_42583 = G__42617;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$state_machine__34713__auto__ = function(state_42583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34713__auto____1.call(this,state_42583);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34713__auto____0;
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34713__auto____1;
return cljs$core$async$state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto___42605,out))
})();
var state__34737__auto__ = (function (){var statearr_42603 = f__34736__auto__.call(null);
(statearr_42603[(6)] = c__34735__auto___42605);

return statearr_42603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto___42605,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__42619 = arguments.length;
switch (G__42619) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34735__auto___42664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto___42664,out){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto___42664,out){
return (function (state_42643){
var state_val_42644 = (state_42643[(1)]);
if((state_val_42644 === (7))){
var inst_42625 = (state_42643[(7)]);
var inst_42625__$1 = (state_42643[(2)]);
var inst_42626 = (inst_42625__$1 == null);
var inst_42627 = cljs.core.not.call(null,inst_42626);
var state_42643__$1 = (function (){var statearr_42645 = state_42643;
(statearr_42645[(7)] = inst_42625__$1);

return statearr_42645;
})();
if(inst_42627){
var statearr_42646_42665 = state_42643__$1;
(statearr_42646_42665[(1)] = (8));

} else {
var statearr_42647_42666 = state_42643__$1;
(statearr_42647_42666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42644 === (1))){
var inst_42620 = (0);
var state_42643__$1 = (function (){var statearr_42648 = state_42643;
(statearr_42648[(8)] = inst_42620);

return statearr_42648;
})();
var statearr_42649_42667 = state_42643__$1;
(statearr_42649_42667[(2)] = null);

(statearr_42649_42667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42644 === (4))){
var state_42643__$1 = state_42643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42643__$1,(7),ch);
} else {
if((state_val_42644 === (6))){
var inst_42638 = (state_42643[(2)]);
var state_42643__$1 = state_42643;
var statearr_42650_42668 = state_42643__$1;
(statearr_42650_42668[(2)] = inst_42638);

(statearr_42650_42668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42644 === (3))){
var inst_42640 = (state_42643[(2)]);
var inst_42641 = cljs.core.async.close_BANG_.call(null,out);
var state_42643__$1 = (function (){var statearr_42651 = state_42643;
(statearr_42651[(9)] = inst_42640);

return statearr_42651;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42643__$1,inst_42641);
} else {
if((state_val_42644 === (2))){
var inst_42620 = (state_42643[(8)]);
var inst_42622 = (inst_42620 < n);
var state_42643__$1 = state_42643;
if(cljs.core.truth_(inst_42622)){
var statearr_42652_42669 = state_42643__$1;
(statearr_42652_42669[(1)] = (4));

} else {
var statearr_42653_42670 = state_42643__$1;
(statearr_42653_42670[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42644 === (11))){
var inst_42620 = (state_42643[(8)]);
var inst_42630 = (state_42643[(2)]);
var inst_42631 = (inst_42620 + (1));
var inst_42620__$1 = inst_42631;
var state_42643__$1 = (function (){var statearr_42654 = state_42643;
(statearr_42654[(10)] = inst_42630);

(statearr_42654[(8)] = inst_42620__$1);

return statearr_42654;
})();
var statearr_42655_42671 = state_42643__$1;
(statearr_42655_42671[(2)] = null);

(statearr_42655_42671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42644 === (9))){
var state_42643__$1 = state_42643;
var statearr_42656_42672 = state_42643__$1;
(statearr_42656_42672[(2)] = null);

(statearr_42656_42672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42644 === (5))){
var state_42643__$1 = state_42643;
var statearr_42657_42673 = state_42643__$1;
(statearr_42657_42673[(2)] = null);

(statearr_42657_42673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42644 === (10))){
var inst_42635 = (state_42643[(2)]);
var state_42643__$1 = state_42643;
var statearr_42658_42674 = state_42643__$1;
(statearr_42658_42674[(2)] = inst_42635);

(statearr_42658_42674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42644 === (8))){
var inst_42625 = (state_42643[(7)]);
var state_42643__$1 = state_42643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42643__$1,(11),out,inst_42625);
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
});})(c__34735__auto___42664,out))
;
return ((function (switch__34712__auto__,c__34735__auto___42664,out){
return (function() {
var cljs$core$async$state_machine__34713__auto__ = null;
var cljs$core$async$state_machine__34713__auto____0 = (function (){
var statearr_42659 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42659[(0)] = cljs$core$async$state_machine__34713__auto__);

(statearr_42659[(1)] = (1));

return statearr_42659;
});
var cljs$core$async$state_machine__34713__auto____1 = (function (state_42643){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_42643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e42660){if((e42660 instanceof Object)){
var ex__34716__auto__ = e42660;
var statearr_42661_42675 = state_42643;
(statearr_42661_42675[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42676 = state_42643;
state_42643 = G__42676;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$state_machine__34713__auto__ = function(state_42643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34713__auto____1.call(this,state_42643);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34713__auto____0;
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34713__auto____1;
return cljs$core$async$state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto___42664,out))
})();
var state__34737__auto__ = (function (){var statearr_42662 = f__34736__auto__.call(null);
(statearr_42662[(6)] = c__34735__auto___42664);

return statearr_42662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto___42664,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42678 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42678 = (function (f,ch,meta42679){
this.f = f;
this.ch = ch;
this.meta42679 = meta42679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42680,meta42679__$1){
var self__ = this;
var _42680__$1 = this;
return (new cljs.core.async.t_cljs$core$async42678(self__.f,self__.ch,meta42679__$1));
});

cljs.core.async.t_cljs$core$async42678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42680){
var self__ = this;
var _42680__$1 = this;
return self__.meta42679;
});

cljs.core.async.t_cljs$core$async42678.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42678.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42678.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42678.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42678.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42681 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42681 = (function (f,ch,meta42679,_,fn1,meta42682){
this.f = f;
this.ch = ch;
this.meta42679 = meta42679;
this._ = _;
this.fn1 = fn1;
this.meta42682 = meta42682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42683,meta42682__$1){
var self__ = this;
var _42683__$1 = this;
return (new cljs.core.async.t_cljs$core$async42681(self__.f,self__.ch,self__.meta42679,self__._,self__.fn1,meta42682__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42683){
var self__ = this;
var _42683__$1 = this;
return self__.meta42682;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42681.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42681.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42677_SHARP_){
return f1.call(null,(((p1__42677_SHARP_ == null))?null:self__.f.call(null,p1__42677_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42681.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42679","meta42679",1753901469,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42678","cljs.core.async/t_cljs$core$async42678",897121296,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42682","meta42682",1163996869,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42681.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42681";

cljs.core.async.t_cljs$core$async42681.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30718__auto__,writer__30719__auto__,opt__30720__auto__){
return cljs.core._write.call(null,writer__30719__auto__,"cljs.core.async/t_cljs$core$async42681");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async42681 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42681(f__$1,ch__$1,meta42679__$1,___$2,fn1__$1,meta42682){
return (new cljs.core.async.t_cljs$core$async42681(f__$1,ch__$1,meta42679__$1,___$2,fn1__$1,meta42682));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42681(self__.f,self__.ch,self__.meta42679,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30035__auto__ = ret;
if(cljs.core.truth_(and__30035__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30035__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async42678.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42678.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42679","meta42679",1753901469,null)], null);
});

cljs.core.async.t_cljs$core$async42678.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42678";

cljs.core.async.t_cljs$core$async42678.cljs$lang$ctorPrWriter = (function (this__30718__auto__,writer__30719__auto__,opt__30720__auto__){
return cljs.core._write.call(null,writer__30719__auto__,"cljs.core.async/t_cljs$core$async42678");
});

cljs.core.async.__GT_t_cljs$core$async42678 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42678(f__$1,ch__$1,meta42679){
return (new cljs.core.async.t_cljs$core$async42678(f__$1,ch__$1,meta42679));
});

}

return (new cljs.core.async.t_cljs$core$async42678(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42684 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42684 = (function (f,ch,meta42685){
this.f = f;
this.ch = ch;
this.meta42685 = meta42685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42686,meta42685__$1){
var self__ = this;
var _42686__$1 = this;
return (new cljs.core.async.t_cljs$core$async42684(self__.f,self__.ch,meta42685__$1));
});

cljs.core.async.t_cljs$core$async42684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42686){
var self__ = this;
var _42686__$1 = this;
return self__.meta42685;
});

cljs.core.async.t_cljs$core$async42684.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42684.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42684.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42684.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42684.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42684.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42684.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42685","meta42685",1229867762,null)], null);
});

cljs.core.async.t_cljs$core$async42684.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42684";

cljs.core.async.t_cljs$core$async42684.cljs$lang$ctorPrWriter = (function (this__30718__auto__,writer__30719__auto__,opt__30720__auto__){
return cljs.core._write.call(null,writer__30719__auto__,"cljs.core.async/t_cljs$core$async42684");
});

cljs.core.async.__GT_t_cljs$core$async42684 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42684(f__$1,ch__$1,meta42685){
return (new cljs.core.async.t_cljs$core$async42684(f__$1,ch__$1,meta42685));
});

}

return (new cljs.core.async.t_cljs$core$async42684(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42687 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42687 = (function (p,ch,meta42688){
this.p = p;
this.ch = ch;
this.meta42688 = meta42688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42689,meta42688__$1){
var self__ = this;
var _42689__$1 = this;
return (new cljs.core.async.t_cljs$core$async42687(self__.p,self__.ch,meta42688__$1));
});

cljs.core.async.t_cljs$core$async42687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42689){
var self__ = this;
var _42689__$1 = this;
return self__.meta42688;
});

cljs.core.async.t_cljs$core$async42687.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42687.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42687.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42687.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42687.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42687.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42687.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42688","meta42688",-532444856,null)], null);
});

cljs.core.async.t_cljs$core$async42687.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42687";

cljs.core.async.t_cljs$core$async42687.cljs$lang$ctorPrWriter = (function (this__30718__auto__,writer__30719__auto__,opt__30720__auto__){
return cljs.core._write.call(null,writer__30719__auto__,"cljs.core.async/t_cljs$core$async42687");
});

cljs.core.async.__GT_t_cljs$core$async42687 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42687(p__$1,ch__$1,meta42688){
return (new cljs.core.async.t_cljs$core$async42687(p__$1,ch__$1,meta42688));
});

}

return (new cljs.core.async.t_cljs$core$async42687(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__42691 = arguments.length;
switch (G__42691) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34735__auto___42731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto___42731,out){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto___42731,out){
return (function (state_42712){
var state_val_42713 = (state_42712[(1)]);
if((state_val_42713 === (7))){
var inst_42708 = (state_42712[(2)]);
var state_42712__$1 = state_42712;
var statearr_42714_42732 = state_42712__$1;
(statearr_42714_42732[(2)] = inst_42708);

(statearr_42714_42732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (1))){
var state_42712__$1 = state_42712;
var statearr_42715_42733 = state_42712__$1;
(statearr_42715_42733[(2)] = null);

(statearr_42715_42733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (4))){
var inst_42694 = (state_42712[(7)]);
var inst_42694__$1 = (state_42712[(2)]);
var inst_42695 = (inst_42694__$1 == null);
var state_42712__$1 = (function (){var statearr_42716 = state_42712;
(statearr_42716[(7)] = inst_42694__$1);

return statearr_42716;
})();
if(cljs.core.truth_(inst_42695)){
var statearr_42717_42734 = state_42712__$1;
(statearr_42717_42734[(1)] = (5));

} else {
var statearr_42718_42735 = state_42712__$1;
(statearr_42718_42735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (6))){
var inst_42694 = (state_42712[(7)]);
var inst_42699 = p.call(null,inst_42694);
var state_42712__$1 = state_42712;
if(cljs.core.truth_(inst_42699)){
var statearr_42719_42736 = state_42712__$1;
(statearr_42719_42736[(1)] = (8));

} else {
var statearr_42720_42737 = state_42712__$1;
(statearr_42720_42737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (3))){
var inst_42710 = (state_42712[(2)]);
var state_42712__$1 = state_42712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42712__$1,inst_42710);
} else {
if((state_val_42713 === (2))){
var state_42712__$1 = state_42712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42712__$1,(4),ch);
} else {
if((state_val_42713 === (11))){
var inst_42702 = (state_42712[(2)]);
var state_42712__$1 = state_42712;
var statearr_42721_42738 = state_42712__$1;
(statearr_42721_42738[(2)] = inst_42702);

(statearr_42721_42738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (9))){
var state_42712__$1 = state_42712;
var statearr_42722_42739 = state_42712__$1;
(statearr_42722_42739[(2)] = null);

(statearr_42722_42739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (5))){
var inst_42697 = cljs.core.async.close_BANG_.call(null,out);
var state_42712__$1 = state_42712;
var statearr_42723_42740 = state_42712__$1;
(statearr_42723_42740[(2)] = inst_42697);

(statearr_42723_42740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (10))){
var inst_42705 = (state_42712[(2)]);
var state_42712__$1 = (function (){var statearr_42724 = state_42712;
(statearr_42724[(8)] = inst_42705);

return statearr_42724;
})();
var statearr_42725_42741 = state_42712__$1;
(statearr_42725_42741[(2)] = null);

(statearr_42725_42741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (8))){
var inst_42694 = (state_42712[(7)]);
var state_42712__$1 = state_42712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42712__$1,(11),out,inst_42694);
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
});})(c__34735__auto___42731,out))
;
return ((function (switch__34712__auto__,c__34735__auto___42731,out){
return (function() {
var cljs$core$async$state_machine__34713__auto__ = null;
var cljs$core$async$state_machine__34713__auto____0 = (function (){
var statearr_42726 = [null,null,null,null,null,null,null,null,null];
(statearr_42726[(0)] = cljs$core$async$state_machine__34713__auto__);

(statearr_42726[(1)] = (1));

return statearr_42726;
});
var cljs$core$async$state_machine__34713__auto____1 = (function (state_42712){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_42712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e42727){if((e42727 instanceof Object)){
var ex__34716__auto__ = e42727;
var statearr_42728_42742 = state_42712;
(statearr_42728_42742[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42743 = state_42712;
state_42712 = G__42743;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$state_machine__34713__auto__ = function(state_42712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34713__auto____1.call(this,state_42712);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34713__auto____0;
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34713__auto____1;
return cljs$core$async$state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto___42731,out))
})();
var state__34737__auto__ = (function (){var statearr_42729 = f__34736__auto__.call(null);
(statearr_42729[(6)] = c__34735__auto___42731);

return statearr_42729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto___42731,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__42745 = arguments.length;
switch (G__42745) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34735__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto__){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto__){
return (function (state_42808){
var state_val_42809 = (state_42808[(1)]);
if((state_val_42809 === (7))){
var inst_42804 = (state_42808[(2)]);
var state_42808__$1 = state_42808;
var statearr_42810_42848 = state_42808__$1;
(statearr_42810_42848[(2)] = inst_42804);

(statearr_42810_42848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (20))){
var inst_42774 = (state_42808[(7)]);
var inst_42785 = (state_42808[(2)]);
var inst_42786 = cljs.core.next.call(null,inst_42774);
var inst_42760 = inst_42786;
var inst_42761 = null;
var inst_42762 = (0);
var inst_42763 = (0);
var state_42808__$1 = (function (){var statearr_42811 = state_42808;
(statearr_42811[(8)] = inst_42762);

(statearr_42811[(9)] = inst_42760);

(statearr_42811[(10)] = inst_42763);

(statearr_42811[(11)] = inst_42785);

(statearr_42811[(12)] = inst_42761);

return statearr_42811;
})();
var statearr_42812_42849 = state_42808__$1;
(statearr_42812_42849[(2)] = null);

(statearr_42812_42849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (1))){
var state_42808__$1 = state_42808;
var statearr_42813_42850 = state_42808__$1;
(statearr_42813_42850[(2)] = null);

(statearr_42813_42850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (4))){
var inst_42749 = (state_42808[(13)]);
var inst_42749__$1 = (state_42808[(2)]);
var inst_42750 = (inst_42749__$1 == null);
var state_42808__$1 = (function (){var statearr_42814 = state_42808;
(statearr_42814[(13)] = inst_42749__$1);

return statearr_42814;
})();
if(cljs.core.truth_(inst_42750)){
var statearr_42815_42851 = state_42808__$1;
(statearr_42815_42851[(1)] = (5));

} else {
var statearr_42816_42852 = state_42808__$1;
(statearr_42816_42852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (15))){
var state_42808__$1 = state_42808;
var statearr_42820_42853 = state_42808__$1;
(statearr_42820_42853[(2)] = null);

(statearr_42820_42853[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (21))){
var state_42808__$1 = state_42808;
var statearr_42821_42854 = state_42808__$1;
(statearr_42821_42854[(2)] = null);

(statearr_42821_42854[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (13))){
var inst_42762 = (state_42808[(8)]);
var inst_42760 = (state_42808[(9)]);
var inst_42763 = (state_42808[(10)]);
var inst_42761 = (state_42808[(12)]);
var inst_42770 = (state_42808[(2)]);
var inst_42771 = (inst_42763 + (1));
var tmp42817 = inst_42762;
var tmp42818 = inst_42760;
var tmp42819 = inst_42761;
var inst_42760__$1 = tmp42818;
var inst_42761__$1 = tmp42819;
var inst_42762__$1 = tmp42817;
var inst_42763__$1 = inst_42771;
var state_42808__$1 = (function (){var statearr_42822 = state_42808;
(statearr_42822[(8)] = inst_42762__$1);

(statearr_42822[(9)] = inst_42760__$1);

(statearr_42822[(10)] = inst_42763__$1);

(statearr_42822[(14)] = inst_42770);

(statearr_42822[(12)] = inst_42761__$1);

return statearr_42822;
})();
var statearr_42823_42855 = state_42808__$1;
(statearr_42823_42855[(2)] = null);

(statearr_42823_42855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (22))){
var state_42808__$1 = state_42808;
var statearr_42824_42856 = state_42808__$1;
(statearr_42824_42856[(2)] = null);

(statearr_42824_42856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (6))){
var inst_42749 = (state_42808[(13)]);
var inst_42758 = f.call(null,inst_42749);
var inst_42759 = cljs.core.seq.call(null,inst_42758);
var inst_42760 = inst_42759;
var inst_42761 = null;
var inst_42762 = (0);
var inst_42763 = (0);
var state_42808__$1 = (function (){var statearr_42825 = state_42808;
(statearr_42825[(8)] = inst_42762);

(statearr_42825[(9)] = inst_42760);

(statearr_42825[(10)] = inst_42763);

(statearr_42825[(12)] = inst_42761);

return statearr_42825;
})();
var statearr_42826_42857 = state_42808__$1;
(statearr_42826_42857[(2)] = null);

(statearr_42826_42857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (17))){
var inst_42774 = (state_42808[(7)]);
var inst_42778 = cljs.core.chunk_first.call(null,inst_42774);
var inst_42779 = cljs.core.chunk_rest.call(null,inst_42774);
var inst_42780 = cljs.core.count.call(null,inst_42778);
var inst_42760 = inst_42779;
var inst_42761 = inst_42778;
var inst_42762 = inst_42780;
var inst_42763 = (0);
var state_42808__$1 = (function (){var statearr_42827 = state_42808;
(statearr_42827[(8)] = inst_42762);

(statearr_42827[(9)] = inst_42760);

(statearr_42827[(10)] = inst_42763);

(statearr_42827[(12)] = inst_42761);

return statearr_42827;
})();
var statearr_42828_42858 = state_42808__$1;
(statearr_42828_42858[(2)] = null);

(statearr_42828_42858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (3))){
var inst_42806 = (state_42808[(2)]);
var state_42808__$1 = state_42808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42808__$1,inst_42806);
} else {
if((state_val_42809 === (12))){
var inst_42794 = (state_42808[(2)]);
var state_42808__$1 = state_42808;
var statearr_42829_42859 = state_42808__$1;
(statearr_42829_42859[(2)] = inst_42794);

(statearr_42829_42859[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (2))){
var state_42808__$1 = state_42808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42808__$1,(4),in$);
} else {
if((state_val_42809 === (23))){
var inst_42802 = (state_42808[(2)]);
var state_42808__$1 = state_42808;
var statearr_42830_42860 = state_42808__$1;
(statearr_42830_42860[(2)] = inst_42802);

(statearr_42830_42860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (19))){
var inst_42789 = (state_42808[(2)]);
var state_42808__$1 = state_42808;
var statearr_42831_42861 = state_42808__$1;
(statearr_42831_42861[(2)] = inst_42789);

(statearr_42831_42861[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (11))){
var inst_42760 = (state_42808[(9)]);
var inst_42774 = (state_42808[(7)]);
var inst_42774__$1 = cljs.core.seq.call(null,inst_42760);
var state_42808__$1 = (function (){var statearr_42832 = state_42808;
(statearr_42832[(7)] = inst_42774__$1);

return statearr_42832;
})();
if(inst_42774__$1){
var statearr_42833_42862 = state_42808__$1;
(statearr_42833_42862[(1)] = (14));

} else {
var statearr_42834_42863 = state_42808__$1;
(statearr_42834_42863[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (9))){
var inst_42796 = (state_42808[(2)]);
var inst_42797 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_42808__$1 = (function (){var statearr_42835 = state_42808;
(statearr_42835[(15)] = inst_42796);

return statearr_42835;
})();
if(cljs.core.truth_(inst_42797)){
var statearr_42836_42864 = state_42808__$1;
(statearr_42836_42864[(1)] = (21));

} else {
var statearr_42837_42865 = state_42808__$1;
(statearr_42837_42865[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (5))){
var inst_42752 = cljs.core.async.close_BANG_.call(null,out);
var state_42808__$1 = state_42808;
var statearr_42838_42866 = state_42808__$1;
(statearr_42838_42866[(2)] = inst_42752);

(statearr_42838_42866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (14))){
var inst_42774 = (state_42808[(7)]);
var inst_42776 = cljs.core.chunked_seq_QMARK_.call(null,inst_42774);
var state_42808__$1 = state_42808;
if(inst_42776){
var statearr_42839_42867 = state_42808__$1;
(statearr_42839_42867[(1)] = (17));

} else {
var statearr_42840_42868 = state_42808__$1;
(statearr_42840_42868[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (16))){
var inst_42792 = (state_42808[(2)]);
var state_42808__$1 = state_42808;
var statearr_42841_42869 = state_42808__$1;
(statearr_42841_42869[(2)] = inst_42792);

(statearr_42841_42869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (10))){
var inst_42763 = (state_42808[(10)]);
var inst_42761 = (state_42808[(12)]);
var inst_42768 = cljs.core._nth.call(null,inst_42761,inst_42763);
var state_42808__$1 = state_42808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42808__$1,(13),out,inst_42768);
} else {
if((state_val_42809 === (18))){
var inst_42774 = (state_42808[(7)]);
var inst_42783 = cljs.core.first.call(null,inst_42774);
var state_42808__$1 = state_42808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42808__$1,(20),out,inst_42783);
} else {
if((state_val_42809 === (8))){
var inst_42762 = (state_42808[(8)]);
var inst_42763 = (state_42808[(10)]);
var inst_42765 = (inst_42763 < inst_42762);
var inst_42766 = inst_42765;
var state_42808__$1 = state_42808;
if(cljs.core.truth_(inst_42766)){
var statearr_42842_42870 = state_42808__$1;
(statearr_42842_42870[(1)] = (10));

} else {
var statearr_42843_42871 = state_42808__$1;
(statearr_42843_42871[(1)] = (11));

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
});})(c__34735__auto__))
;
return ((function (switch__34712__auto__,c__34735__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34713__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34713__auto____0 = (function (){
var statearr_42844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42844[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34713__auto__);

(statearr_42844[(1)] = (1));

return statearr_42844;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34713__auto____1 = (function (state_42808){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_42808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e42845){if((e42845 instanceof Object)){
var ex__34716__auto__ = e42845;
var statearr_42846_42872 = state_42808;
(statearr_42846_42872[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42873 = state_42808;
state_42808 = G__42873;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34713__auto__ = function(state_42808){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34713__auto____1.call(this,state_42808);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34713__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34713__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto__))
})();
var state__34737__auto__ = (function (){var statearr_42847 = f__34736__auto__.call(null);
(statearr_42847[(6)] = c__34735__auto__);

return statearr_42847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto__))
);

return c__34735__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__42875 = arguments.length;
switch (G__42875) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__42878 = arguments.length;
switch (G__42878) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__42881 = arguments.length;
switch (G__42881) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34735__auto___42928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto___42928,out){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto___42928,out){
return (function (state_42905){
var state_val_42906 = (state_42905[(1)]);
if((state_val_42906 === (7))){
var inst_42900 = (state_42905[(2)]);
var state_42905__$1 = state_42905;
var statearr_42907_42929 = state_42905__$1;
(statearr_42907_42929[(2)] = inst_42900);

(statearr_42907_42929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42906 === (1))){
var inst_42882 = null;
var state_42905__$1 = (function (){var statearr_42908 = state_42905;
(statearr_42908[(7)] = inst_42882);

return statearr_42908;
})();
var statearr_42909_42930 = state_42905__$1;
(statearr_42909_42930[(2)] = null);

(statearr_42909_42930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42906 === (4))){
var inst_42885 = (state_42905[(8)]);
var inst_42885__$1 = (state_42905[(2)]);
var inst_42886 = (inst_42885__$1 == null);
var inst_42887 = cljs.core.not.call(null,inst_42886);
var state_42905__$1 = (function (){var statearr_42910 = state_42905;
(statearr_42910[(8)] = inst_42885__$1);

return statearr_42910;
})();
if(inst_42887){
var statearr_42911_42931 = state_42905__$1;
(statearr_42911_42931[(1)] = (5));

} else {
var statearr_42912_42932 = state_42905__$1;
(statearr_42912_42932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42906 === (6))){
var state_42905__$1 = state_42905;
var statearr_42913_42933 = state_42905__$1;
(statearr_42913_42933[(2)] = null);

(statearr_42913_42933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42906 === (3))){
var inst_42902 = (state_42905[(2)]);
var inst_42903 = cljs.core.async.close_BANG_.call(null,out);
var state_42905__$1 = (function (){var statearr_42914 = state_42905;
(statearr_42914[(9)] = inst_42902);

return statearr_42914;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42905__$1,inst_42903);
} else {
if((state_val_42906 === (2))){
var state_42905__$1 = state_42905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42905__$1,(4),ch);
} else {
if((state_val_42906 === (11))){
var inst_42885 = (state_42905[(8)]);
var inst_42894 = (state_42905[(2)]);
var inst_42882 = inst_42885;
var state_42905__$1 = (function (){var statearr_42915 = state_42905;
(statearr_42915[(10)] = inst_42894);

(statearr_42915[(7)] = inst_42882);

return statearr_42915;
})();
var statearr_42916_42934 = state_42905__$1;
(statearr_42916_42934[(2)] = null);

(statearr_42916_42934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42906 === (9))){
var inst_42885 = (state_42905[(8)]);
var state_42905__$1 = state_42905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42905__$1,(11),out,inst_42885);
} else {
if((state_val_42906 === (5))){
var inst_42885 = (state_42905[(8)]);
var inst_42882 = (state_42905[(7)]);
var inst_42889 = cljs.core._EQ_.call(null,inst_42885,inst_42882);
var state_42905__$1 = state_42905;
if(inst_42889){
var statearr_42918_42935 = state_42905__$1;
(statearr_42918_42935[(1)] = (8));

} else {
var statearr_42919_42936 = state_42905__$1;
(statearr_42919_42936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42906 === (10))){
var inst_42897 = (state_42905[(2)]);
var state_42905__$1 = state_42905;
var statearr_42920_42937 = state_42905__$1;
(statearr_42920_42937[(2)] = inst_42897);

(statearr_42920_42937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42906 === (8))){
var inst_42882 = (state_42905[(7)]);
var tmp42917 = inst_42882;
var inst_42882__$1 = tmp42917;
var state_42905__$1 = (function (){var statearr_42921 = state_42905;
(statearr_42921[(7)] = inst_42882__$1);

return statearr_42921;
})();
var statearr_42922_42938 = state_42905__$1;
(statearr_42922_42938[(2)] = null);

(statearr_42922_42938[(1)] = (2));


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
});})(c__34735__auto___42928,out))
;
return ((function (switch__34712__auto__,c__34735__auto___42928,out){
return (function() {
var cljs$core$async$state_machine__34713__auto__ = null;
var cljs$core$async$state_machine__34713__auto____0 = (function (){
var statearr_42923 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42923[(0)] = cljs$core$async$state_machine__34713__auto__);

(statearr_42923[(1)] = (1));

return statearr_42923;
});
var cljs$core$async$state_machine__34713__auto____1 = (function (state_42905){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_42905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e42924){if((e42924 instanceof Object)){
var ex__34716__auto__ = e42924;
var statearr_42925_42939 = state_42905;
(statearr_42925_42939[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42940 = state_42905;
state_42905 = G__42940;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$state_machine__34713__auto__ = function(state_42905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34713__auto____1.call(this,state_42905);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34713__auto____0;
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34713__auto____1;
return cljs$core$async$state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto___42928,out))
})();
var state__34737__auto__ = (function (){var statearr_42926 = f__34736__auto__.call(null);
(statearr_42926[(6)] = c__34735__auto___42928);

return statearr_42926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto___42928,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__42942 = arguments.length;
switch (G__42942) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34735__auto___43008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto___43008,out){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto___43008,out){
return (function (state_42980){
var state_val_42981 = (state_42980[(1)]);
if((state_val_42981 === (7))){
var inst_42976 = (state_42980[(2)]);
var state_42980__$1 = state_42980;
var statearr_42982_43009 = state_42980__$1;
(statearr_42982_43009[(2)] = inst_42976);

(statearr_42982_43009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42981 === (1))){
var inst_42943 = (new Array(n));
var inst_42944 = inst_42943;
var inst_42945 = (0);
var state_42980__$1 = (function (){var statearr_42983 = state_42980;
(statearr_42983[(7)] = inst_42944);

(statearr_42983[(8)] = inst_42945);

return statearr_42983;
})();
var statearr_42984_43010 = state_42980__$1;
(statearr_42984_43010[(2)] = null);

(statearr_42984_43010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42981 === (4))){
var inst_42948 = (state_42980[(9)]);
var inst_42948__$1 = (state_42980[(2)]);
var inst_42949 = (inst_42948__$1 == null);
var inst_42950 = cljs.core.not.call(null,inst_42949);
var state_42980__$1 = (function (){var statearr_42985 = state_42980;
(statearr_42985[(9)] = inst_42948__$1);

return statearr_42985;
})();
if(inst_42950){
var statearr_42986_43011 = state_42980__$1;
(statearr_42986_43011[(1)] = (5));

} else {
var statearr_42987_43012 = state_42980__$1;
(statearr_42987_43012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42981 === (15))){
var inst_42970 = (state_42980[(2)]);
var state_42980__$1 = state_42980;
var statearr_42988_43013 = state_42980__$1;
(statearr_42988_43013[(2)] = inst_42970);

(statearr_42988_43013[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42981 === (13))){
var state_42980__$1 = state_42980;
var statearr_42989_43014 = state_42980__$1;
(statearr_42989_43014[(2)] = null);

(statearr_42989_43014[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42981 === (6))){
var inst_42945 = (state_42980[(8)]);
var inst_42966 = (inst_42945 > (0));
var state_42980__$1 = state_42980;
if(cljs.core.truth_(inst_42966)){
var statearr_42990_43015 = state_42980__$1;
(statearr_42990_43015[(1)] = (12));

} else {
var statearr_42991_43016 = state_42980__$1;
(statearr_42991_43016[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42981 === (3))){
var inst_42978 = (state_42980[(2)]);
var state_42980__$1 = state_42980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42980__$1,inst_42978);
} else {
if((state_val_42981 === (12))){
var inst_42944 = (state_42980[(7)]);
var inst_42968 = cljs.core.vec.call(null,inst_42944);
var state_42980__$1 = state_42980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42980__$1,(15),out,inst_42968);
} else {
if((state_val_42981 === (2))){
var state_42980__$1 = state_42980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42980__$1,(4),ch);
} else {
if((state_val_42981 === (11))){
var inst_42960 = (state_42980[(2)]);
var inst_42961 = (new Array(n));
var inst_42944 = inst_42961;
var inst_42945 = (0);
var state_42980__$1 = (function (){var statearr_42992 = state_42980;
(statearr_42992[(10)] = inst_42960);

(statearr_42992[(7)] = inst_42944);

(statearr_42992[(8)] = inst_42945);

return statearr_42992;
})();
var statearr_42993_43017 = state_42980__$1;
(statearr_42993_43017[(2)] = null);

(statearr_42993_43017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42981 === (9))){
var inst_42944 = (state_42980[(7)]);
var inst_42958 = cljs.core.vec.call(null,inst_42944);
var state_42980__$1 = state_42980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42980__$1,(11),out,inst_42958);
} else {
if((state_val_42981 === (5))){
var inst_42953 = (state_42980[(11)]);
var inst_42944 = (state_42980[(7)]);
var inst_42948 = (state_42980[(9)]);
var inst_42945 = (state_42980[(8)]);
var inst_42952 = (inst_42944[inst_42945] = inst_42948);
var inst_42953__$1 = (inst_42945 + (1));
var inst_42954 = (inst_42953__$1 < n);
var state_42980__$1 = (function (){var statearr_42994 = state_42980;
(statearr_42994[(11)] = inst_42953__$1);

(statearr_42994[(12)] = inst_42952);

return statearr_42994;
})();
if(cljs.core.truth_(inst_42954)){
var statearr_42995_43018 = state_42980__$1;
(statearr_42995_43018[(1)] = (8));

} else {
var statearr_42996_43019 = state_42980__$1;
(statearr_42996_43019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42981 === (14))){
var inst_42973 = (state_42980[(2)]);
var inst_42974 = cljs.core.async.close_BANG_.call(null,out);
var state_42980__$1 = (function (){var statearr_42998 = state_42980;
(statearr_42998[(13)] = inst_42973);

return statearr_42998;
})();
var statearr_42999_43020 = state_42980__$1;
(statearr_42999_43020[(2)] = inst_42974);

(statearr_42999_43020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42981 === (10))){
var inst_42964 = (state_42980[(2)]);
var state_42980__$1 = state_42980;
var statearr_43000_43021 = state_42980__$1;
(statearr_43000_43021[(2)] = inst_42964);

(statearr_43000_43021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42981 === (8))){
var inst_42953 = (state_42980[(11)]);
var inst_42944 = (state_42980[(7)]);
var tmp42997 = inst_42944;
var inst_42944__$1 = tmp42997;
var inst_42945 = inst_42953;
var state_42980__$1 = (function (){var statearr_43001 = state_42980;
(statearr_43001[(7)] = inst_42944__$1);

(statearr_43001[(8)] = inst_42945);

return statearr_43001;
})();
var statearr_43002_43022 = state_42980__$1;
(statearr_43002_43022[(2)] = null);

(statearr_43002_43022[(1)] = (2));


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
});})(c__34735__auto___43008,out))
;
return ((function (switch__34712__auto__,c__34735__auto___43008,out){
return (function() {
var cljs$core$async$state_machine__34713__auto__ = null;
var cljs$core$async$state_machine__34713__auto____0 = (function (){
var statearr_43003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43003[(0)] = cljs$core$async$state_machine__34713__auto__);

(statearr_43003[(1)] = (1));

return statearr_43003;
});
var cljs$core$async$state_machine__34713__auto____1 = (function (state_42980){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_42980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e43004){if((e43004 instanceof Object)){
var ex__34716__auto__ = e43004;
var statearr_43005_43023 = state_42980;
(statearr_43005_43023[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43024 = state_42980;
state_42980 = G__43024;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$state_machine__34713__auto__ = function(state_42980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34713__auto____1.call(this,state_42980);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34713__auto____0;
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34713__auto____1;
return cljs$core$async$state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto___43008,out))
})();
var state__34737__auto__ = (function (){var statearr_43006 = f__34736__auto__.call(null);
(statearr_43006[(6)] = c__34735__auto___43008);

return statearr_43006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto___43008,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43026 = arguments.length;
switch (G__43026) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34735__auto___43096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto___43096,out){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto___43096,out){
return (function (state_43068){
var state_val_43069 = (state_43068[(1)]);
if((state_val_43069 === (7))){
var inst_43064 = (state_43068[(2)]);
var state_43068__$1 = state_43068;
var statearr_43070_43097 = state_43068__$1;
(statearr_43070_43097[(2)] = inst_43064);

(statearr_43070_43097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43069 === (1))){
var inst_43027 = [];
var inst_43028 = inst_43027;
var inst_43029 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43068__$1 = (function (){var statearr_43071 = state_43068;
(statearr_43071[(7)] = inst_43028);

(statearr_43071[(8)] = inst_43029);

return statearr_43071;
})();
var statearr_43072_43098 = state_43068__$1;
(statearr_43072_43098[(2)] = null);

(statearr_43072_43098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43069 === (4))){
var inst_43032 = (state_43068[(9)]);
var inst_43032__$1 = (state_43068[(2)]);
var inst_43033 = (inst_43032__$1 == null);
var inst_43034 = cljs.core.not.call(null,inst_43033);
var state_43068__$1 = (function (){var statearr_43073 = state_43068;
(statearr_43073[(9)] = inst_43032__$1);

return statearr_43073;
})();
if(inst_43034){
var statearr_43074_43099 = state_43068__$1;
(statearr_43074_43099[(1)] = (5));

} else {
var statearr_43075_43100 = state_43068__$1;
(statearr_43075_43100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43069 === (15))){
var inst_43058 = (state_43068[(2)]);
var state_43068__$1 = state_43068;
var statearr_43076_43101 = state_43068__$1;
(statearr_43076_43101[(2)] = inst_43058);

(statearr_43076_43101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43069 === (13))){
var state_43068__$1 = state_43068;
var statearr_43077_43102 = state_43068__$1;
(statearr_43077_43102[(2)] = null);

(statearr_43077_43102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43069 === (6))){
var inst_43028 = (state_43068[(7)]);
var inst_43053 = inst_43028.length;
var inst_43054 = (inst_43053 > (0));
var state_43068__$1 = state_43068;
if(cljs.core.truth_(inst_43054)){
var statearr_43078_43103 = state_43068__$1;
(statearr_43078_43103[(1)] = (12));

} else {
var statearr_43079_43104 = state_43068__$1;
(statearr_43079_43104[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43069 === (3))){
var inst_43066 = (state_43068[(2)]);
var state_43068__$1 = state_43068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43068__$1,inst_43066);
} else {
if((state_val_43069 === (12))){
var inst_43028 = (state_43068[(7)]);
var inst_43056 = cljs.core.vec.call(null,inst_43028);
var state_43068__$1 = state_43068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43068__$1,(15),out,inst_43056);
} else {
if((state_val_43069 === (2))){
var state_43068__$1 = state_43068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43068__$1,(4),ch);
} else {
if((state_val_43069 === (11))){
var inst_43036 = (state_43068[(10)]);
var inst_43032 = (state_43068[(9)]);
var inst_43046 = (state_43068[(2)]);
var inst_43047 = [];
var inst_43048 = inst_43047.push(inst_43032);
var inst_43028 = inst_43047;
var inst_43029 = inst_43036;
var state_43068__$1 = (function (){var statearr_43080 = state_43068;
(statearr_43080[(11)] = inst_43046);

(statearr_43080[(7)] = inst_43028);

(statearr_43080[(12)] = inst_43048);

(statearr_43080[(8)] = inst_43029);

return statearr_43080;
})();
var statearr_43081_43105 = state_43068__$1;
(statearr_43081_43105[(2)] = null);

(statearr_43081_43105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43069 === (9))){
var inst_43028 = (state_43068[(7)]);
var inst_43044 = cljs.core.vec.call(null,inst_43028);
var state_43068__$1 = state_43068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43068__$1,(11),out,inst_43044);
} else {
if((state_val_43069 === (5))){
var inst_43036 = (state_43068[(10)]);
var inst_43029 = (state_43068[(8)]);
var inst_43032 = (state_43068[(9)]);
var inst_43036__$1 = f.call(null,inst_43032);
var inst_43037 = cljs.core._EQ_.call(null,inst_43036__$1,inst_43029);
var inst_43038 = cljs.core.keyword_identical_QMARK_.call(null,inst_43029,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43039 = (inst_43037) || (inst_43038);
var state_43068__$1 = (function (){var statearr_43082 = state_43068;
(statearr_43082[(10)] = inst_43036__$1);

return statearr_43082;
})();
if(cljs.core.truth_(inst_43039)){
var statearr_43083_43106 = state_43068__$1;
(statearr_43083_43106[(1)] = (8));

} else {
var statearr_43084_43107 = state_43068__$1;
(statearr_43084_43107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43069 === (14))){
var inst_43061 = (state_43068[(2)]);
var inst_43062 = cljs.core.async.close_BANG_.call(null,out);
var state_43068__$1 = (function (){var statearr_43086 = state_43068;
(statearr_43086[(13)] = inst_43061);

return statearr_43086;
})();
var statearr_43087_43108 = state_43068__$1;
(statearr_43087_43108[(2)] = inst_43062);

(statearr_43087_43108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43069 === (10))){
var inst_43051 = (state_43068[(2)]);
var state_43068__$1 = state_43068;
var statearr_43088_43109 = state_43068__$1;
(statearr_43088_43109[(2)] = inst_43051);

(statearr_43088_43109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43069 === (8))){
var inst_43028 = (state_43068[(7)]);
var inst_43036 = (state_43068[(10)]);
var inst_43032 = (state_43068[(9)]);
var inst_43041 = inst_43028.push(inst_43032);
var tmp43085 = inst_43028;
var inst_43028__$1 = tmp43085;
var inst_43029 = inst_43036;
var state_43068__$1 = (function (){var statearr_43089 = state_43068;
(statearr_43089[(14)] = inst_43041);

(statearr_43089[(7)] = inst_43028__$1);

(statearr_43089[(8)] = inst_43029);

return statearr_43089;
})();
var statearr_43090_43110 = state_43068__$1;
(statearr_43090_43110[(2)] = null);

(statearr_43090_43110[(1)] = (2));


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
});})(c__34735__auto___43096,out))
;
return ((function (switch__34712__auto__,c__34735__auto___43096,out){
return (function() {
var cljs$core$async$state_machine__34713__auto__ = null;
var cljs$core$async$state_machine__34713__auto____0 = (function (){
var statearr_43091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43091[(0)] = cljs$core$async$state_machine__34713__auto__);

(statearr_43091[(1)] = (1));

return statearr_43091;
});
var cljs$core$async$state_machine__34713__auto____1 = (function (state_43068){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_43068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e43092){if((e43092 instanceof Object)){
var ex__34716__auto__ = e43092;
var statearr_43093_43111 = state_43068;
(statearr_43093_43111[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43112 = state_43068;
state_43068 = G__43112;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
cljs$core$async$state_machine__34713__auto__ = function(state_43068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34713__auto____1.call(this,state_43068);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34713__auto____0;
cljs$core$async$state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34713__auto____1;
return cljs$core$async$state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto___43096,out))
})();
var state__34737__auto__ = (function (){var statearr_43094 = f__34736__auto__.call(null);
(statearr_43094[(6)] = c__34735__auto___43096);

return statearr_43094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto___43096,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1505885202811
