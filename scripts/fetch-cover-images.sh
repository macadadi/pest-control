#!/usr/bin/env bash
# Pest-themed covers from Wikimedia Commons (CC / open licences). Run: bash scripts/fetch-cover-images.sh
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
COVERS="$ROOT/public/images/covers"
mkdir -p "$COVERS"
UA="Mozilla/5.0 (compatible; KenyaPestSite/1.0)"

download() {
  local out="$1"
  shift
  local commons_name="$*"
  local enc
  enc=$(COMMONS_NAME="$commons_name" python3 -c 'import os,urllib.parse; print(urllib.parse.quote(os.environ["COMMONS_NAME"]))')
  echo "→ $out"
  curl -fsSL -A "$UA" -L --retry 2 --retry-delay 4 \
    -o "$COVERS/$out" \
    "https://commons.wikimedia.org/wiki/Special:FilePath/${enc}?width=1600"
  sleep 2
}

download "sanitizing-equipment.jpg" "Retro Earth brand pest control sprayer 2024 March 9.jpeg"
cp "$COVERS/sanitizing-equipment.jpg" "$COVERS/field-worker.jpg"

download "wooden-beams.jpg" "Termite damage on a block of wood 01.jpg"
download "honeycomb.jpg" "Apis mellifera Western honey bee.jpg"
download "plants-close.jpg" "Camponotus ligniperda.jpg"
download "fishing-dock.jpg" "Aedes aegypti.jpg"
download "nairobi-pests.jpg" "Blattella germanica (Linnaeus, 1767) German Cockroach (24516339107).jpg"
download "mouse-grass.jpg" "Predator Free New Zealand rat trap and tunnel.jpg"
download "bedbugs-cover.jpg" "Infested Mattress (11555822213).jpg"
download "mosquitoes-cover.jpg" "Aedes aegypti.jpg"
download "kpc-grain.jpg" "Sitophilus oryzae.jpg"
download "kpc-fly.jpg" "Stomoxys calcitrans 01.jpg"
download "kpc-spider.jpg" "Tegenaria domestica.jpg"
download "kpc-tick.jpg" "Ixodes ricinus on dry grass.jpg"
download "kpc-silver.jpg" "Lepisma saccharina.jpg"
download "kpc-snake.jpg" "Black Mamba 01.jpg"
download "kpc-scorpion.jpg" "Buthus occitanus.jpg"
download "kpc-moth.jpg" "Plodia interpunctella.jpg"
download "kpc-wasp.jpg" "Vespa crabro.jpg"
download "kisumu-pests.jpg" "Aedes aegypti.jpg"
download "nakuru-pests.jpg" "Stomoxys calcitrans 01.jpg"
download "cockroach-cover.jpg" "Blattella germanica (Linnaeus, 1767) German Cockroach (24516339107).jpg"
download "amc-bait-monitoring.jpg" "Predator Free New Zealand rat trap and tunnel.jpg"
download "flea-pet-context.jpg" "Ctenocephalides felis ZSM.jpg"
download "ipm-training.jpg" "Retro Earth brand pest control sprayer 2024 March 9.jpeg"

echo "Done → $COVERS"
