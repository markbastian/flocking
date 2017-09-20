// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e45723){if((e45723 instanceof Error)){
var e = e45723;
return "Error: Unable to stringify";
} else {
throw e45723;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__45726 = arguments.length;
switch (G__45726) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__45724_SHARP_){
if(typeof p1__45724_SHARP_ === 'string'){
return p1__45724_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__45724_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31331__auto__ = [];
var len__31324__auto___45729 = arguments.length;
var i__31325__auto___45730 = (0);
while(true){
if((i__31325__auto___45730 < len__31324__auto___45729)){
args__31331__auto__.push((arguments[i__31325__auto___45730]));

var G__45731 = (i__31325__auto___45730 + (1));
i__31325__auto___45730 = G__45731;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq45728){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45728));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31331__auto__ = [];
var len__31324__auto___45733 = arguments.length;
var i__31325__auto___45734 = (0);
while(true){
if((i__31325__auto___45734 < len__31324__auto___45733)){
args__31331__auto__.push((arguments[i__31325__auto___45734]));

var G__45735 = (i__31325__auto___45734 + (1));
i__31325__auto___45734 = G__45735;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq45732){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45732));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__45736){
var map__45737 = p__45736;
var map__45737__$1 = ((((!((map__45737 == null)))?((((map__45737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45737):map__45737);
var message = cljs.core.get.call(null,map__45737__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__45737__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30047__auto__)){
return or__30047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30035__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30035__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30035__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34735__auto___45816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto___45816,ch){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto___45816,ch){
return (function (state_45788){
var state_val_45789 = (state_45788[(1)]);
if((state_val_45789 === (7))){
var inst_45784 = (state_45788[(2)]);
var state_45788__$1 = state_45788;
var statearr_45790_45817 = state_45788__$1;
(statearr_45790_45817[(2)] = inst_45784);

(statearr_45790_45817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (1))){
var state_45788__$1 = state_45788;
var statearr_45791_45818 = state_45788__$1;
(statearr_45791_45818[(2)] = null);

(statearr_45791_45818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (4))){
var inst_45741 = (state_45788[(7)]);
var inst_45741__$1 = (state_45788[(2)]);
var state_45788__$1 = (function (){var statearr_45792 = state_45788;
(statearr_45792[(7)] = inst_45741__$1);

return statearr_45792;
})();
if(cljs.core.truth_(inst_45741__$1)){
var statearr_45793_45819 = state_45788__$1;
(statearr_45793_45819[(1)] = (5));

} else {
var statearr_45794_45820 = state_45788__$1;
(statearr_45794_45820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (15))){
var inst_45748 = (state_45788[(8)]);
var inst_45763 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45748);
var inst_45764 = cljs.core.first.call(null,inst_45763);
var inst_45765 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_45764);
var inst_45766 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45765)].join('');
var inst_45767 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_45766);
var state_45788__$1 = state_45788;
var statearr_45795_45821 = state_45788__$1;
(statearr_45795_45821[(2)] = inst_45767);

(statearr_45795_45821[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (13))){
var inst_45772 = (state_45788[(2)]);
var state_45788__$1 = state_45788;
var statearr_45796_45822 = state_45788__$1;
(statearr_45796_45822[(2)] = inst_45772);

(statearr_45796_45822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (6))){
var state_45788__$1 = state_45788;
var statearr_45797_45823 = state_45788__$1;
(statearr_45797_45823[(2)] = null);

(statearr_45797_45823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (17))){
var inst_45770 = (state_45788[(2)]);
var state_45788__$1 = state_45788;
var statearr_45798_45824 = state_45788__$1;
(statearr_45798_45824[(2)] = inst_45770);

(statearr_45798_45824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (3))){
var inst_45786 = (state_45788[(2)]);
var state_45788__$1 = state_45788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45788__$1,inst_45786);
} else {
if((state_val_45789 === (12))){
var inst_45747 = (state_45788[(9)]);
var inst_45761 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_45747,opts);
var state_45788__$1 = state_45788;
if(cljs.core.truth_(inst_45761)){
var statearr_45799_45825 = state_45788__$1;
(statearr_45799_45825[(1)] = (15));

} else {
var statearr_45800_45826 = state_45788__$1;
(statearr_45800_45826[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (2))){
var state_45788__$1 = state_45788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45788__$1,(4),ch);
} else {
if((state_val_45789 === (11))){
var inst_45748 = (state_45788[(8)]);
var inst_45753 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45754 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_45748);
var inst_45755 = cljs.core.async.timeout.call(null,(1000));
var inst_45756 = [inst_45754,inst_45755];
var inst_45757 = (new cljs.core.PersistentVector(null,2,(5),inst_45753,inst_45756,null));
var state_45788__$1 = state_45788;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45788__$1,(14),inst_45757);
} else {
if((state_val_45789 === (9))){
var inst_45748 = (state_45788[(8)]);
var inst_45774 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_45775 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45748);
var inst_45776 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45775);
var inst_45777 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45776)].join('');
var inst_45778 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_45777);
var state_45788__$1 = (function (){var statearr_45801 = state_45788;
(statearr_45801[(10)] = inst_45774);

return statearr_45801;
})();
var statearr_45802_45827 = state_45788__$1;
(statearr_45802_45827[(2)] = inst_45778);

(statearr_45802_45827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (5))){
var inst_45741 = (state_45788[(7)]);
var inst_45743 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_45744 = (new cljs.core.PersistentArrayMap(null,2,inst_45743,null));
var inst_45745 = (new cljs.core.PersistentHashSet(null,inst_45744,null));
var inst_45746 = figwheel.client.focus_msgs.call(null,inst_45745,inst_45741);
var inst_45747 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_45746);
var inst_45748 = cljs.core.first.call(null,inst_45746);
var inst_45749 = figwheel.client.autoload_QMARK_.call(null);
var state_45788__$1 = (function (){var statearr_45803 = state_45788;
(statearr_45803[(9)] = inst_45747);

(statearr_45803[(8)] = inst_45748);

return statearr_45803;
})();
if(cljs.core.truth_(inst_45749)){
var statearr_45804_45828 = state_45788__$1;
(statearr_45804_45828[(1)] = (8));

} else {
var statearr_45805_45829 = state_45788__$1;
(statearr_45805_45829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (14))){
var inst_45759 = (state_45788[(2)]);
var state_45788__$1 = state_45788;
var statearr_45806_45830 = state_45788__$1;
(statearr_45806_45830[(2)] = inst_45759);

(statearr_45806_45830[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (16))){
var state_45788__$1 = state_45788;
var statearr_45807_45831 = state_45788__$1;
(statearr_45807_45831[(2)] = null);

(statearr_45807_45831[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (10))){
var inst_45780 = (state_45788[(2)]);
var state_45788__$1 = (function (){var statearr_45808 = state_45788;
(statearr_45808[(11)] = inst_45780);

return statearr_45808;
})();
var statearr_45809_45832 = state_45788__$1;
(statearr_45809_45832[(2)] = null);

(statearr_45809_45832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (8))){
var inst_45747 = (state_45788[(9)]);
var inst_45751 = figwheel.client.reload_file_state_QMARK_.call(null,inst_45747,opts);
var state_45788__$1 = state_45788;
if(cljs.core.truth_(inst_45751)){
var statearr_45810_45833 = state_45788__$1;
(statearr_45810_45833[(1)] = (11));

} else {
var statearr_45811_45834 = state_45788__$1;
(statearr_45811_45834[(1)] = (12));

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
});})(c__34735__auto___45816,ch))
;
return ((function (switch__34712__auto__,c__34735__auto___45816,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34713__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34713__auto____0 = (function (){
var statearr_45812 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45812[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34713__auto__);

(statearr_45812[(1)] = (1));

return statearr_45812;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34713__auto____1 = (function (state_45788){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_45788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e45813){if((e45813 instanceof Object)){
var ex__34716__auto__ = e45813;
var statearr_45814_45835 = state_45788;
(statearr_45814_45835[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45836 = state_45788;
state_45788 = G__45836;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34713__auto__ = function(state_45788){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34713__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34713__auto____1.call(this,state_45788);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34713__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34713__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto___45816,ch))
})();
var state__34737__auto__ = (function (){var statearr_45815 = f__34736__auto__.call(null);
(statearr_45815[(6)] = c__34735__auto___45816);

return statearr_45815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto___45816,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__45837_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__45837_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_45839 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_45839){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e45838){if((e45838 instanceof Error)){
var e = e45838;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_45839], null));
} else {
var e = e45838;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_45839))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__45840){
var map__45841 = p__45840;
var map__45841__$1 = ((((!((map__45841 == null)))?((((map__45841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45841.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45841):map__45841);
var opts = map__45841__$1;
var build_id = cljs.core.get.call(null,map__45841__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__45841,map__45841__$1,opts,build_id){
return (function (p__45843){
var vec__45844 = p__45843;
var seq__45845 = cljs.core.seq.call(null,vec__45844);
var first__45846 = cljs.core.first.call(null,seq__45845);
var seq__45845__$1 = cljs.core.next.call(null,seq__45845);
var map__45847 = first__45846;
var map__45847__$1 = ((((!((map__45847 == null)))?((((map__45847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45847):map__45847);
var msg = map__45847__$1;
var msg_name = cljs.core.get.call(null,map__45847__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45845__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__45844,seq__45845,first__45846,seq__45845__$1,map__45847,map__45847__$1,msg,msg_name,_,map__45841,map__45841__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__45844,seq__45845,first__45846,seq__45845__$1,map__45847,map__45847__$1,msg,msg_name,_,map__45841,map__45841__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__45841,map__45841__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__45849){
var vec__45850 = p__45849;
var seq__45851 = cljs.core.seq.call(null,vec__45850);
var first__45852 = cljs.core.first.call(null,seq__45851);
var seq__45851__$1 = cljs.core.next.call(null,seq__45851);
var map__45853 = first__45852;
var map__45853__$1 = ((((!((map__45853 == null)))?((((map__45853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45853.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45853):map__45853);
var msg = map__45853__$1;
var msg_name = cljs.core.get.call(null,map__45853__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45851__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__45855){
var map__45856 = p__45855;
var map__45856__$1 = ((((!((map__45856 == null)))?((((map__45856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45856):map__45856);
var on_compile_warning = cljs.core.get.call(null,map__45856__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__45856__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__45856,map__45856__$1,on_compile_warning,on_compile_fail){
return (function (p__45858){
var vec__45859 = p__45858;
var seq__45860 = cljs.core.seq.call(null,vec__45859);
var first__45861 = cljs.core.first.call(null,seq__45860);
var seq__45860__$1 = cljs.core.next.call(null,seq__45860);
var map__45862 = first__45861;
var map__45862__$1 = ((((!((map__45862 == null)))?((((map__45862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45862):map__45862);
var msg = map__45862__$1;
var msg_name = cljs.core.get.call(null,map__45862__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45860__$1;
var pred__45864 = cljs.core._EQ_;
var expr__45865 = msg_name;
if(cljs.core.truth_(pred__45864.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__45865))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__45864.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__45865))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__45856,map__45856__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34735__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto__,msg_hist,msg_names,msg){
return (function (state_45954){
var state_val_45955 = (state_45954[(1)]);
if((state_val_45955 === (7))){
var inst_45874 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
if(cljs.core.truth_(inst_45874)){
var statearr_45956_46003 = state_45954__$1;
(statearr_45956_46003[(1)] = (8));

} else {
var statearr_45957_46004 = state_45954__$1;
(statearr_45957_46004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (20))){
var inst_45948 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
var statearr_45958_46005 = state_45954__$1;
(statearr_45958_46005[(2)] = inst_45948);

(statearr_45958_46005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (27))){
var inst_45944 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
var statearr_45959_46006 = state_45954__$1;
(statearr_45959_46006[(2)] = inst_45944);

(statearr_45959_46006[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (1))){
var inst_45867 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_45954__$1 = state_45954;
if(cljs.core.truth_(inst_45867)){
var statearr_45960_46007 = state_45954__$1;
(statearr_45960_46007[(1)] = (2));

} else {
var statearr_45961_46008 = state_45954__$1;
(statearr_45961_46008[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (24))){
var inst_45946 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
var statearr_45962_46009 = state_45954__$1;
(statearr_45962_46009[(2)] = inst_45946);

(statearr_45962_46009[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (4))){
var inst_45952 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45954__$1,inst_45952);
} else {
if((state_val_45955 === (15))){
var inst_45950 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
var statearr_45963_46010 = state_45954__$1;
(statearr_45963_46010[(2)] = inst_45950);

(statearr_45963_46010[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (21))){
var inst_45903 = (state_45954[(2)]);
var inst_45904 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45905 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45904);
var state_45954__$1 = (function (){var statearr_45964 = state_45954;
(statearr_45964[(7)] = inst_45903);

return statearr_45964;
})();
var statearr_45965_46011 = state_45954__$1;
(statearr_45965_46011[(2)] = inst_45905);

(statearr_45965_46011[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (31))){
var inst_45933 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_45954__$1 = state_45954;
if(cljs.core.truth_(inst_45933)){
var statearr_45966_46012 = state_45954__$1;
(statearr_45966_46012[(1)] = (34));

} else {
var statearr_45967_46013 = state_45954__$1;
(statearr_45967_46013[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (32))){
var inst_45942 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
var statearr_45968_46014 = state_45954__$1;
(statearr_45968_46014[(2)] = inst_45942);

(statearr_45968_46014[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (33))){
var inst_45929 = (state_45954[(2)]);
var inst_45930 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45931 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45930);
var state_45954__$1 = (function (){var statearr_45969 = state_45954;
(statearr_45969[(8)] = inst_45929);

return statearr_45969;
})();
var statearr_45970_46015 = state_45954__$1;
(statearr_45970_46015[(2)] = inst_45931);

(statearr_45970_46015[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (13))){
var inst_45888 = figwheel.client.heads_up.clear.call(null);
var state_45954__$1 = state_45954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45954__$1,(16),inst_45888);
} else {
if((state_val_45955 === (22))){
var inst_45909 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45910 = figwheel.client.heads_up.append_warning_message.call(null,inst_45909);
var state_45954__$1 = state_45954;
var statearr_45971_46016 = state_45954__$1;
(statearr_45971_46016[(2)] = inst_45910);

(statearr_45971_46016[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (36))){
var inst_45940 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
var statearr_45972_46017 = state_45954__$1;
(statearr_45972_46017[(2)] = inst_45940);

(statearr_45972_46017[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (29))){
var inst_45920 = (state_45954[(2)]);
var inst_45921 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45922 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45921);
var state_45954__$1 = (function (){var statearr_45973 = state_45954;
(statearr_45973[(9)] = inst_45920);

return statearr_45973;
})();
var statearr_45974_46018 = state_45954__$1;
(statearr_45974_46018[(2)] = inst_45922);

(statearr_45974_46018[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (6))){
var inst_45869 = (state_45954[(10)]);
var state_45954__$1 = state_45954;
var statearr_45975_46019 = state_45954__$1;
(statearr_45975_46019[(2)] = inst_45869);

(statearr_45975_46019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (28))){
var inst_45916 = (state_45954[(2)]);
var inst_45917 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45918 = figwheel.client.heads_up.display_warning.call(null,inst_45917);
var state_45954__$1 = (function (){var statearr_45976 = state_45954;
(statearr_45976[(11)] = inst_45916);

return statearr_45976;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45954__$1,(29),inst_45918);
} else {
if((state_val_45955 === (25))){
var inst_45914 = figwheel.client.heads_up.clear.call(null);
var state_45954__$1 = state_45954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45954__$1,(28),inst_45914);
} else {
if((state_val_45955 === (34))){
var inst_45935 = figwheel.client.heads_up.flash_loaded.call(null);
var state_45954__$1 = state_45954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45954__$1,(37),inst_45935);
} else {
if((state_val_45955 === (17))){
var inst_45894 = (state_45954[(2)]);
var inst_45895 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45896 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45895);
var state_45954__$1 = (function (){var statearr_45977 = state_45954;
(statearr_45977[(12)] = inst_45894);

return statearr_45977;
})();
var statearr_45978_46020 = state_45954__$1;
(statearr_45978_46020[(2)] = inst_45896);

(statearr_45978_46020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (3))){
var inst_45886 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_45954__$1 = state_45954;
if(cljs.core.truth_(inst_45886)){
var statearr_45979_46021 = state_45954__$1;
(statearr_45979_46021[(1)] = (13));

} else {
var statearr_45980_46022 = state_45954__$1;
(statearr_45980_46022[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (12))){
var inst_45882 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
var statearr_45981_46023 = state_45954__$1;
(statearr_45981_46023[(2)] = inst_45882);

(statearr_45981_46023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (2))){
var inst_45869 = (state_45954[(10)]);
var inst_45869__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_45954__$1 = (function (){var statearr_45982 = state_45954;
(statearr_45982[(10)] = inst_45869__$1);

return statearr_45982;
})();
if(cljs.core.truth_(inst_45869__$1)){
var statearr_45983_46024 = state_45954__$1;
(statearr_45983_46024[(1)] = (5));

} else {
var statearr_45984_46025 = state_45954__$1;
(statearr_45984_46025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (23))){
var inst_45912 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_45954__$1 = state_45954;
if(cljs.core.truth_(inst_45912)){
var statearr_45985_46026 = state_45954__$1;
(statearr_45985_46026[(1)] = (25));

} else {
var statearr_45986_46027 = state_45954__$1;
(statearr_45986_46027[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (35))){
var state_45954__$1 = state_45954;
var statearr_45987_46028 = state_45954__$1;
(statearr_45987_46028[(2)] = null);

(statearr_45987_46028[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (19))){
var inst_45907 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_45954__$1 = state_45954;
if(cljs.core.truth_(inst_45907)){
var statearr_45988_46029 = state_45954__$1;
(statearr_45988_46029[(1)] = (22));

} else {
var statearr_45989_46030 = state_45954__$1;
(statearr_45989_46030[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (11))){
var inst_45878 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
var statearr_45990_46031 = state_45954__$1;
(statearr_45990_46031[(2)] = inst_45878);

(statearr_45990_46031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (9))){
var inst_45880 = figwheel.client.heads_up.clear.call(null);
var state_45954__$1 = state_45954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45954__$1,(12),inst_45880);
} else {
if((state_val_45955 === (5))){
var inst_45871 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_45954__$1 = state_45954;
var statearr_45991_46032 = state_45954__$1;
(statearr_45991_46032[(2)] = inst_45871);

(statearr_45991_46032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (14))){
var inst_45898 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_45954__$1 = state_45954;
if(cljs.core.truth_(inst_45898)){
var statearr_45992_46033 = state_45954__$1;
(statearr_45992_46033[(1)] = (18));

} else {
var statearr_45993_46034 = state_45954__$1;
(statearr_45993_46034[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (26))){
var inst_45924 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_45954__$1 = state_45954;
if(cljs.core.truth_(inst_45924)){
var statearr_45994_46035 = state_45954__$1;
(statearr_45994_46035[(1)] = (30));

} else {
var statearr_45995_46036 = state_45954__$1;
(statearr_45995_46036[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (16))){
var inst_45890 = (state_45954[(2)]);
var inst_45891 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45892 = figwheel.client.heads_up.display_exception.call(null,inst_45891);
var state_45954__$1 = (function (){var statearr_45996 = state_45954;
(statearr_45996[(13)] = inst_45890);

return statearr_45996;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45954__$1,(17),inst_45892);
} else {
if((state_val_45955 === (30))){
var inst_45926 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45927 = figwheel.client.heads_up.display_warning.call(null,inst_45926);
var state_45954__$1 = state_45954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45954__$1,(33),inst_45927);
} else {
if((state_val_45955 === (10))){
var inst_45884 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
var statearr_45997_46037 = state_45954__$1;
(statearr_45997_46037[(2)] = inst_45884);

(statearr_45997_46037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (18))){
var inst_45900 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45901 = figwheel.client.heads_up.display_exception.call(null,inst_45900);
var state_45954__$1 = state_45954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45954__$1,(21),inst_45901);
} else {
if((state_val_45955 === (37))){
var inst_45937 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
var statearr_45998_46038 = state_45954__$1;
(statearr_45998_46038[(2)] = inst_45937);

(statearr_45998_46038[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (8))){
var inst_45876 = figwheel.client.heads_up.flash_loaded.call(null);
var state_45954__$1 = state_45954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45954__$1,(11),inst_45876);
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
});})(c__34735__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34712__auto__,c__34735__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34713__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34713__auto____0 = (function (){
var statearr_45999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45999[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34713__auto__);

(statearr_45999[(1)] = (1));

return statearr_45999;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34713__auto____1 = (function (state_45954){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_45954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e46000){if((e46000 instanceof Object)){
var ex__34716__auto__ = e46000;
var statearr_46001_46039 = state_45954;
(statearr_46001_46039[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46040 = state_45954;
state_45954 = G__46040;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34713__auto__ = function(state_45954){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34713__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34713__auto____1.call(this,state_45954);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34713__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34713__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto__,msg_hist,msg_names,msg))
})();
var state__34737__auto__ = (function (){var statearr_46002 = f__34736__auto__.call(null);
(statearr_46002[(6)] = c__34735__auto__);

return statearr_46002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto__,msg_hist,msg_names,msg))
);

return c__34735__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34735__auto___46069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto___46069,ch){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto___46069,ch){
return (function (state_46055){
var state_val_46056 = (state_46055[(1)]);
if((state_val_46056 === (1))){
var state_46055__$1 = state_46055;
var statearr_46057_46070 = state_46055__$1;
(statearr_46057_46070[(2)] = null);

(statearr_46057_46070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46056 === (2))){
var state_46055__$1 = state_46055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46055__$1,(4),ch);
} else {
if((state_val_46056 === (3))){
var inst_46053 = (state_46055[(2)]);
var state_46055__$1 = state_46055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46055__$1,inst_46053);
} else {
if((state_val_46056 === (4))){
var inst_46043 = (state_46055[(7)]);
var inst_46043__$1 = (state_46055[(2)]);
var state_46055__$1 = (function (){var statearr_46058 = state_46055;
(statearr_46058[(7)] = inst_46043__$1);

return statearr_46058;
})();
if(cljs.core.truth_(inst_46043__$1)){
var statearr_46059_46071 = state_46055__$1;
(statearr_46059_46071[(1)] = (5));

} else {
var statearr_46060_46072 = state_46055__$1;
(statearr_46060_46072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46056 === (5))){
var inst_46043 = (state_46055[(7)]);
var inst_46045 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_46043);
var state_46055__$1 = state_46055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46055__$1,(8),inst_46045);
} else {
if((state_val_46056 === (6))){
var state_46055__$1 = state_46055;
var statearr_46061_46073 = state_46055__$1;
(statearr_46061_46073[(2)] = null);

(statearr_46061_46073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46056 === (7))){
var inst_46051 = (state_46055[(2)]);
var state_46055__$1 = state_46055;
var statearr_46062_46074 = state_46055__$1;
(statearr_46062_46074[(2)] = inst_46051);

(statearr_46062_46074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46056 === (8))){
var inst_46047 = (state_46055[(2)]);
var state_46055__$1 = (function (){var statearr_46063 = state_46055;
(statearr_46063[(8)] = inst_46047);

return statearr_46063;
})();
var statearr_46064_46075 = state_46055__$1;
(statearr_46064_46075[(2)] = null);

(statearr_46064_46075[(1)] = (2));


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
});})(c__34735__auto___46069,ch))
;
return ((function (switch__34712__auto__,c__34735__auto___46069,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34713__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34713__auto____0 = (function (){
var statearr_46065 = [null,null,null,null,null,null,null,null,null];
(statearr_46065[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34713__auto__);

(statearr_46065[(1)] = (1));

return statearr_46065;
});
var figwheel$client$heads_up_plugin_$_state_machine__34713__auto____1 = (function (state_46055){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_46055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e46066){if((e46066 instanceof Object)){
var ex__34716__auto__ = e46066;
var statearr_46067_46076 = state_46055;
(statearr_46067_46076[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46077 = state_46055;
state_46055 = G__46077;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34713__auto__ = function(state_46055){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34713__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34713__auto____1.call(this,state_46055);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34713__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34713__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto___46069,ch))
})();
var state__34737__auto__ = (function (){var statearr_46068 = f__34736__auto__.call(null);
(statearr_46068[(6)] = c__34735__auto___46069);

return statearr_46068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto___46069,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34735__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto__){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto__){
return (function (state_46083){
var state_val_46084 = (state_46083[(1)]);
if((state_val_46084 === (1))){
var inst_46078 = cljs.core.async.timeout.call(null,(3000));
var state_46083__$1 = state_46083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46083__$1,(2),inst_46078);
} else {
if((state_val_46084 === (2))){
var inst_46080 = (state_46083[(2)]);
var inst_46081 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_46083__$1 = (function (){var statearr_46085 = state_46083;
(statearr_46085[(7)] = inst_46080);

return statearr_46085;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46083__$1,inst_46081);
} else {
return null;
}
}
});})(c__34735__auto__))
;
return ((function (switch__34712__auto__,c__34735__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34713__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34713__auto____0 = (function (){
var statearr_46086 = [null,null,null,null,null,null,null,null];
(statearr_46086[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34713__auto__);

(statearr_46086[(1)] = (1));

return statearr_46086;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34713__auto____1 = (function (state_46083){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_46083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e46087){if((e46087 instanceof Object)){
var ex__34716__auto__ = e46087;
var statearr_46088_46090 = state_46083;
(statearr_46088_46090[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46091 = state_46083;
state_46083 = G__46091;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34713__auto__ = function(state_46083){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34713__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34713__auto____1.call(this,state_46083);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34713__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34713__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto__))
})();
var state__34737__auto__ = (function (){var statearr_46089 = f__34736__auto__.call(null);
(statearr_46089[(6)] = c__34735__auto__);

return statearr_46089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto__))
);

return c__34735__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5459__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5459__auto__)){
var figwheel_version = temp__5459__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34735__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34735__auto__,figwheel_version,temp__5459__auto__){
return (function (){
var f__34736__auto__ = (function (){var switch__34712__auto__ = ((function (c__34735__auto__,figwheel_version,temp__5459__auto__){
return (function (state_46098){
var state_val_46099 = (state_46098[(1)]);
if((state_val_46099 === (1))){
var inst_46092 = cljs.core.async.timeout.call(null,(2000));
var state_46098__$1 = state_46098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46098__$1,(2),inst_46092);
} else {
if((state_val_46099 === (2))){
var inst_46094 = (state_46098[(2)]);
var inst_46095 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_46096 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_46095);
var state_46098__$1 = (function (){var statearr_46100 = state_46098;
(statearr_46100[(7)] = inst_46094);

return statearr_46100;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46098__$1,inst_46096);
} else {
return null;
}
}
});})(c__34735__auto__,figwheel_version,temp__5459__auto__))
;
return ((function (switch__34712__auto__,c__34735__auto__,figwheel_version,temp__5459__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34713__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34713__auto____0 = (function (){
var statearr_46101 = [null,null,null,null,null,null,null,null];
(statearr_46101[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34713__auto__);

(statearr_46101[(1)] = (1));

return statearr_46101;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34713__auto____1 = (function (state_46098){
while(true){
var ret_value__34714__auto__ = (function (){try{while(true){
var result__34715__auto__ = switch__34712__auto__.call(null,state_46098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34715__auto__;
}
break;
}
}catch (e46102){if((e46102 instanceof Object)){
var ex__34716__auto__ = e46102;
var statearr_46103_46105 = state_46098;
(statearr_46103_46105[(5)] = ex__34716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46106 = state_46098;
state_46098 = G__46106;
continue;
} else {
return ret_value__34714__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34713__auto__ = function(state_46098){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34713__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34713__auto____1.call(this,state_46098);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34713__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34713__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34713__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34713__auto__;
})()
;})(switch__34712__auto__,c__34735__auto__,figwheel_version,temp__5459__auto__))
})();
var state__34737__auto__ = (function (){var statearr_46104 = f__34736__auto__.call(null);
(statearr_46104[(6)] = c__34735__auto__);

return statearr_46104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34737__auto__);
});})(c__34735__auto__,figwheel_version,temp__5459__auto__))
);

return c__34735__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__46107){
var map__46108 = p__46107;
var map__46108__$1 = ((((!((map__46108 == null)))?((((map__46108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46108.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46108):map__46108);
var file = cljs.core.get.call(null,map__46108__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__46108__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__46108__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__46110 = "";
var G__46110__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46110),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__46110);
var G__46110__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46110__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__46110__$1);
if(cljs.core.truth_((function (){var and__30035__auto__ = line;
if(cljs.core.truth_(and__30035__auto__)){
return column;
} else {
return and__30035__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46110__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__46110__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__46111){
var map__46112 = p__46111;
var map__46112__$1 = ((((!((map__46112 == null)))?((((map__46112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46112):map__46112);
var ed = map__46112__$1;
var formatted_exception = cljs.core.get.call(null,map__46112__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__46112__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__46112__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__46114_46118 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__46115_46119 = null;
var count__46116_46120 = (0);
var i__46117_46121 = (0);
while(true){
if((i__46117_46121 < count__46116_46120)){
var msg_46122 = cljs.core._nth.call(null,chunk__46115_46119,i__46117_46121);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46122);

var G__46123 = seq__46114_46118;
var G__46124 = chunk__46115_46119;
var G__46125 = count__46116_46120;
var G__46126 = (i__46117_46121 + (1));
seq__46114_46118 = G__46123;
chunk__46115_46119 = G__46124;
count__46116_46120 = G__46125;
i__46117_46121 = G__46126;
continue;
} else {
var temp__5459__auto___46127 = cljs.core.seq.call(null,seq__46114_46118);
if(temp__5459__auto___46127){
var seq__46114_46128__$1 = temp__5459__auto___46127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46114_46128__$1)){
var c__30978__auto___46129 = cljs.core.chunk_first.call(null,seq__46114_46128__$1);
var G__46130 = cljs.core.chunk_rest.call(null,seq__46114_46128__$1);
var G__46131 = c__30978__auto___46129;
var G__46132 = cljs.core.count.call(null,c__30978__auto___46129);
var G__46133 = (0);
seq__46114_46118 = G__46130;
chunk__46115_46119 = G__46131;
count__46116_46120 = G__46132;
i__46117_46121 = G__46133;
continue;
} else {
var msg_46134 = cljs.core.first.call(null,seq__46114_46128__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46134);

var G__46135 = cljs.core.next.call(null,seq__46114_46128__$1);
var G__46136 = null;
var G__46137 = (0);
var G__46138 = (0);
seq__46114_46118 = G__46135;
chunk__46115_46119 = G__46136;
count__46116_46120 = G__46137;
i__46117_46121 = G__46138;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__46139){
var map__46140 = p__46139;
var map__46140__$1 = ((((!((map__46140 == null)))?((((map__46140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46140):map__46140);
var w = map__46140__$1;
var message = cljs.core.get.call(null,map__46140__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30035__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30035__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30035__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__46142 = cljs.core.seq.call(null,plugins);
var chunk__46143 = null;
var count__46144 = (0);
var i__46145 = (0);
while(true){
if((i__46145 < count__46144)){
var vec__46146 = cljs.core._nth.call(null,chunk__46143,i__46145);
var k = cljs.core.nth.call(null,vec__46146,(0),null);
var plugin = cljs.core.nth.call(null,vec__46146,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46152 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46142,chunk__46143,count__46144,i__46145,pl_46152,vec__46146,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_46152.call(null,msg_hist);
});})(seq__46142,chunk__46143,count__46144,i__46145,pl_46152,vec__46146,k,plugin))
);
} else {
}

var G__46153 = seq__46142;
var G__46154 = chunk__46143;
var G__46155 = count__46144;
var G__46156 = (i__46145 + (1));
seq__46142 = G__46153;
chunk__46143 = G__46154;
count__46144 = G__46155;
i__46145 = G__46156;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq.call(null,seq__46142);
if(temp__5459__auto__){
var seq__46142__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46142__$1)){
var c__30978__auto__ = cljs.core.chunk_first.call(null,seq__46142__$1);
var G__46157 = cljs.core.chunk_rest.call(null,seq__46142__$1);
var G__46158 = c__30978__auto__;
var G__46159 = cljs.core.count.call(null,c__30978__auto__);
var G__46160 = (0);
seq__46142 = G__46157;
chunk__46143 = G__46158;
count__46144 = G__46159;
i__46145 = G__46160;
continue;
} else {
var vec__46149 = cljs.core.first.call(null,seq__46142__$1);
var k = cljs.core.nth.call(null,vec__46149,(0),null);
var plugin = cljs.core.nth.call(null,vec__46149,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46161 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46142,chunk__46143,count__46144,i__46145,pl_46161,vec__46149,k,plugin,seq__46142__$1,temp__5459__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_46161.call(null,msg_hist);
});})(seq__46142,chunk__46143,count__46144,i__46145,pl_46161,vec__46149,k,plugin,seq__46142__$1,temp__5459__auto__))
);
} else {
}

var G__46162 = cljs.core.next.call(null,seq__46142__$1);
var G__46163 = null;
var G__46164 = (0);
var G__46165 = (0);
seq__46142 = G__46162;
chunk__46143 = G__46163;
count__46144 = G__46164;
i__46145 = G__46165;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__46167 = arguments.length;
switch (G__46167) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__46168_46173 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__46169_46174 = null;
var count__46170_46175 = (0);
var i__46171_46176 = (0);
while(true){
if((i__46171_46176 < count__46170_46175)){
var msg_46177 = cljs.core._nth.call(null,chunk__46169_46174,i__46171_46176);
figwheel.client.socket.handle_incoming_message.call(null,msg_46177);

var G__46178 = seq__46168_46173;
var G__46179 = chunk__46169_46174;
var G__46180 = count__46170_46175;
var G__46181 = (i__46171_46176 + (1));
seq__46168_46173 = G__46178;
chunk__46169_46174 = G__46179;
count__46170_46175 = G__46180;
i__46171_46176 = G__46181;
continue;
} else {
var temp__5459__auto___46182 = cljs.core.seq.call(null,seq__46168_46173);
if(temp__5459__auto___46182){
var seq__46168_46183__$1 = temp__5459__auto___46182;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46168_46183__$1)){
var c__30978__auto___46184 = cljs.core.chunk_first.call(null,seq__46168_46183__$1);
var G__46185 = cljs.core.chunk_rest.call(null,seq__46168_46183__$1);
var G__46186 = c__30978__auto___46184;
var G__46187 = cljs.core.count.call(null,c__30978__auto___46184);
var G__46188 = (0);
seq__46168_46173 = G__46185;
chunk__46169_46174 = G__46186;
count__46170_46175 = G__46187;
i__46171_46176 = G__46188;
continue;
} else {
var msg_46189 = cljs.core.first.call(null,seq__46168_46183__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_46189);

var G__46190 = cljs.core.next.call(null,seq__46168_46183__$1);
var G__46191 = null;
var G__46192 = (0);
var G__46193 = (0);
seq__46168_46173 = G__46190;
chunk__46169_46174 = G__46191;
count__46170_46175 = G__46192;
i__46171_46176 = G__46193;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31331__auto__ = [];
var len__31324__auto___46198 = arguments.length;
var i__31325__auto___46199 = (0);
while(true){
if((i__31325__auto___46199 < len__31324__auto___46198)){
args__31331__auto__.push((arguments[i__31325__auto___46199]));

var G__46200 = (i__31325__auto___46199 + (1));
i__31325__auto___46199 = G__46200;
continue;
} else {
}
break;
}

var argseq__31332__auto__ = ((((0) < args__31331__auto__.length))?(new cljs.core.IndexedSeq(args__31331__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31332__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__46195){
var map__46196 = p__46195;
var map__46196__$1 = ((((!((map__46196 == null)))?((((map__46196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46196):map__46196);
var opts = map__46196__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq46194){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46194));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e46201){if((e46201 instanceof Error)){
var e = e46201;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e46201;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__46202){
var map__46203 = p__46202;
var map__46203__$1 = ((((!((map__46203 == null)))?((((map__46203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46203):map__46203);
var msg_name = cljs.core.get.call(null,map__46203__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1505885206600
