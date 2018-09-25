# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Task.destroy_all
Task.create(name: "Do the dishes", description:"At 3:30 do the dishes from lunch")
Task.create(name: "Homework", description:"Math needs to be done by tomorrow")
Task.create(name: "Clean", description:"Top to Bottom")
Task.create(name: "Laundry", description:"All clothes need washing")
Task.create(name: "Shopping", description:"Empty fridge. Need fresh produce")

User.create(email: "ben@ben.com", password: "123123")
