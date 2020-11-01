require 'json'
class LinksController < ApplicationController
    def create
         link = Link.new( { code: 'test_code', score: 'test_score' } )
         link.save
         render json: link  
    end

    
    def get
        
        link = Link.find_by('code':params[:code])
        unless link.nil?
            session[:score] = link.score
            link.destroy
            
        end
        redirect_to '/'
        
    end
    
    def get_new_link
    
         charset = Array('A'..'Z') + Array('a'..'z') + Array(0..9)
         
         
         if session[:score].nil? 
             session[:score] = { played:0,guessed:0,first_try:0,second_try:0,third_try:0 }
             
         end   
         
            
         @link = Link.new( { code: Array.new(6) { charset.sample }.join, score: session[:score] } )
         @link.save
         render json: @link.code
    end

end
