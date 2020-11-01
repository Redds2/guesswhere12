class ScoreController < ApplicationController
require 'json'
def change_score
    
    if session[:score].nil? 
         session[:score] = { played:0,guessed:0,first_try:0,second_try:0,third_try:0 }
    end
    #score = JSON.parse(session[:score])
    session[:score].merge!( params.permit(:played, :guessed, :first_try, :second_try, :third_try) ) {|key,val1,val2| val1.to_i+val2.to_i}
    render json: session[:score]

end
end