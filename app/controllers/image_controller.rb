require 'json'

class ImageController < ApplicationController

    def get_random_photo
    
        total_photos_number = 478682
        num_real =  rand(3)
        processed = 0
        result = []
    
        file = File.open(Rails.root + 'app/assets/photos_.json')      
        file_data = file.readlines.map(&:chomp)
        
        while processed != 4
      
       
            data = JSON.parse( file_data [ rand(total_photos_number) ] )
            point = { 'coords':{ 'lat':data[1][1], 'lon': data[1][0]} }
            
             # if result.empty? 
             #    result.push ( point )
             #    processed = processed + 1
             #    next
                 
             # end
      
            unless false.in?(result.map{ |j| [ (point.dig(:coords,:lat)-j.dig(:coords,:lat)).abs,(point.dig(:coords,:lon)-j.dig(:coords,:lon)).abs ].max > 10 ? true : false })
                 
                if processed == num_real
                    point[:link]='https://images.mapillary.com/%s/thumb-1024.jpg'% data[0]
                end                   
            
                 result.push ( point )
                 processed = processed + 1
                
            end
            
           
            
        end
     
   render json:result
          
    end
         
 
end
#end