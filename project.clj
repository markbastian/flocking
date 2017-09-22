(defproject
  flocking "0.1.0-SNAPSHOT"
  :description "An implementation of flocking behaviors in Clojure"
  :url "https://github.com/markbastian/flocking"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0-alpha13"]
                 [org.clojure/clojurescript "1.9.908"]
                 [numerics "0.1.0-SNAPSHOT"]
                 [quil "2.6.0"]
                 [reagent "0.7.0"]
                 [org.clojure/core.async "0.3.443"
                  :exclusions [org.clojure/tools.reader]]]

  :plugins [[lein-figwheel "0.5.13"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :main flocking.launcher

  :jar-exclusions [#"\.swp|\.swo|\.DS_Store"]
  :profiles {:uberjar {:aot :all}
             :dev {:plugins [[lein-cljsbuild "1.1.7"]
                             [org.clojure/clojurescript "1.9.908"]
                             [figwheel-sidecar "0.5.13"]]
                   :dependencies [[com.cemerick/piggieback "0.2.2"]
                                  [figwheel-sidecar "0.5.13"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}
             :cljs {:plugins [[lein-cljsbuild "1.1.7"]]}}

  :source-paths ["src/clj" "src/cljc"]

  :clj {:builds [{ :source-paths ["src/clj" "src/cljc" "test"] }]}

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs" "src/cljc"]
                        ;; If no code is to be run, set :figwheel true for continued automagical reloading
                        :figwheel {:on-jsload "flocking.core/on-js-reload"}

                        :compiler {:main flocking.core
                                   :asset-path "js/compiled/out"
                                   :output-to "resources/public/js/compiled/flocking.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :optimizations :none
                                   :pretty-print true
                                   :source-map-timestamp true}}
                       ;; This next build is an compressed minified build for
                       ;; production. You can build this with:
                       ;; lein cljsbuild once min
                       {:id "min"
                        :source-paths ["src/cljs" "src/cljc"]
                        :compiler {:output-to "resources/public/js/compiled/flocking.js"
                                   :main flocking.core
                                   :optimizations :advanced
                                   :pretty-print false}}]}

  :figwheel {:css-dirs ["resources/public/css"]})
