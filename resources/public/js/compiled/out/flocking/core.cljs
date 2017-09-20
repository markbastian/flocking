(ns flocking.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as reagent :refer [atom]]
            [cljs.core.async :refer [put! chan <! >! timeout close!]]
            [flocking.game-launcher :as gl]
            [flocking.rules :as rules]
            [flocking.simulation :as sim]))

(enable-console-print!)

(defn with-rotation [])

(defn triangle [x0 y0 x1 y1 x2 y2]
  [:polygon {:points [x0 y0 x1 y1 x2 y2]
             :transform (str "translate(100,100) rotate(45)")
             :stroke :cyan :fill :none}])

(defn render [state]
  (let [{:keys [world boids food time]} @state]
    [:div
     [:svg {:style {:margin "0" :overflow "hidden" :padding  "0px 0px 0px 0px"}
            :width 400 :height 400}
      [:rect {:x 0 :y 0 :width 400 :height 400 :stroke :black :fill :black}]
      (for [{[[px py] [vx vy]] :state} boids
            :let [r (Math/atan2 vy vx)]]
        [:polygon {:key (str "boid-" px "-" py)
                   :points [-5 -5 5 -5 0 10]
                   :transform (str "translate("
                                   (+ (* px 10) 200) ","
                                   (+ (* py 10) 200) ") rotate("
                                   (+ 270 (/ (* r 180) 3.14)) ")")
                   :stroke :cyan :fill :none}])]
     #_[:table
      [:tbody
       [:tr [:th "px"][:th "py"][:th "vx"][:th "vy"]]
       (for [[i {[[px py] [vx vy]] :state}] (map-indexed (fn [i b] [i b]) boids)
             :let [r (Math/atan2 vy vx)]]
         [:tr {:key (str "cell-" i)} [:td px][:td py][:td vx][:td vx]])]]]))

(when-let [app-context (.getElementById js/document "app")]
  (let [state (atom (rules/initial-state 20 20))]
    (reagent/render-component
      [render state]
      (do
        (set! (.-onkeydown js/window)
              (fn [e] (when (and (#{32 37 38 39 40} (.-keyCode e))
                                 (= (.-target e) (.-body js/document)))
                        (.preventDefault e))))
        (js/setInterval #(swap! state sim/sim) 33)
        app-context))))

;[:polyline {:points rules/t :stroke :cyan :fill :none}]
;(doall (for [{:keys [initial-pos pos] :as sam} sams
;             :when (and initial-pos pos)]
;         [:polyline {:key (str "sam-" sam)
;                     :points [initial-pos pos] :stroke :green :fill :none}]))
;(doall (for [missile missiles :let [{:keys [initial-pos pos]} missile]]
;         [:polyline {:key (str "missile-" missile)
;                     :points [initial-pos pos] :stroke :red :fill :none}]))
;(doall (for [target targets]
;         [:circle {:key (str "target-" target)
;                   :cx (first target)
;                   :cy (second target)
;                   :r 3 :fill :green}]))
;(doall (for [{:keys [pos radius] :as bomb} bombs]
;         [:circle {:key (str "bomb-" bomb)
;                   :cx (first pos)
;                   :cy (second pos)
;                   :r radius :fill :orange}]))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
