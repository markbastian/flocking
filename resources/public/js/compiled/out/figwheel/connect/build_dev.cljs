(ns figwheel.connect.build-dev (:require [figwheel.client] [figwheel.client.utils] [flocking.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/flocking.core.on-js-reload (apply js/flocking.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'flocking.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

