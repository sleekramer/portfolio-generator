# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
if User.all.count < 5
  5.times do
    User.create!(
      email: Faker::Internet.email,
      password: "helloworld",
      password_confirmation: "helloworld"
    )
  end
end

users = User.all

users.each do |user|
  unless user.portfolio
    portfolio = Portfolio.create!(
      user_id: user.id,
      full_name: Faker::Name.name,
      bio: Faker::Hipster.sentences(1,true).join(" ")
    )
    5.times do
      portfolio.projects.create!(
        name: Faker::App.name,
        description: Faker::Hipster.sentence(7,true,5),
        features: Faker::Hipster.paragraphs(2).join("\n")
      )
    end
    4.times do
      portfolio.skills.create!(
        name: Faker::Hacker.noun
      )
    end
  end
end
