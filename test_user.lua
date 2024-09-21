-- test_user.lua
local User = require("src.models.user")  -- نستدعي ملف user.lua من المسار الصحيح

local testUser = User:new("Alice", 25)
print(testUser:getInfo())  -- يجب أن يطبع: Name: Alice, Age: 25
