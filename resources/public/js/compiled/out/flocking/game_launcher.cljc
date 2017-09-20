(ns flocking.game-launcher
  (:require
    [quil.core :as q #?@(:cljs [:include-macros true])]
    [quil.middleware :as m]
    [flocking.simulation :as sim]
    [flocking.rules :as rules]
    [flocking.quil-renderer :as qr]))

(defn rand-range [lo hi]
  (+ lo (* (- hi lo) (Math/random))))

(defn gen-pos [{:keys [minx maxx miny maxy]}]
  [(rand-range minx maxx) (rand-range miny maxy)])

(defn gen-state [{:keys [minx maxx miny maxy]}]
  [[(rand-range minx maxx) (rand-range miny maxy)] [0 0]])

(defn setup [num-boids]
  (q/smooth)
  (q/frame-rate 30)
  (let [dim 20
        world { :minx (- dim) :maxx dim :miny (- dim) :maxy dim }]
    {:world world
     :boids (for [_ (range num-boids)]
              {:width 0.6
               :height 1.0
               :color [0 255 0]
               :max-speed 5.0
               :state (gen-state world)
               :behaviors
               {
                ;:hunger { :metabolism 100 :strength 10 }
                :wander (assoc (rules/gen-wander) :strength 10 :debug false)
                :separate { :range 2 :strength 10 }
                :align { :strength 10 }
                :cohere { :strength 50 }}})
     :food (repeatedly 20 #(gen-pos world))}))

(defn launch-sketch [{:keys[width height host num-boids]}]
  (q/sketch
    :title "Flocking Behaviors"
    #?@(:cljs [:host host])
    :setup #(setup num-boids)
    :draw qr/draw
    :update sim/sim
    :middleware [m/fun-mode]
    :size [width height]))

#?(:clj (launch-sketch { :width 600 :height 600 :num-boids 100 }))

#?(:cljs (defn ^:export launch-app[host width height num-boids]
           (launch-sketch { :width width :height height :host host :num-boids num-boids })))