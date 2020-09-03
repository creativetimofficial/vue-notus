import React from "react";

// components

import MapExample from "@/components/Maps/MapExample.vue";

export default function Maps() {
  return (
    <>
      <div class="flex flex-wrap">
        <div class="w-full px-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <MapExample
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={
                <div
                  style={{ height: "600px" }}
                  class="relative w-full rounded"
                />
              }
              mapElement={
                <div class="rounded" style={{ height: "100%" }} />
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
