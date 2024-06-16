fx_version "cerulean"

description "Silence - Laptop"
author "Silence"
version '0.0.1'

lua54 'yes'

game "gta5"

ui_page 'ui/build/index.html'

shared_script "@apx/shared/lib.lua"

client_scripts {
  "@arp-lib/client/cl_rpc.js",
  "build/client/client.js"
}

server_scripts {
  "@oxmysql/lib/MySQL.lua",
  "@arp-lib/server/sv_rpc.js",
  "@arp-lib/server/sv_sql.js",
  "build/server/server.js"
}

files {
  'ui/build/index.html',
  'ui/build/**/*'
}