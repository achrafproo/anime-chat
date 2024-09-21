-- user.lua
local User = {}

function User:new(name, age)
    local obj = {name = name, age = age}
    setmetatable(obj, self)
    self.__index = self
    return obj
end

function User:getInfo()
    return "Name: " .. self.name .. ", Age: " .. self.age
end

return User
