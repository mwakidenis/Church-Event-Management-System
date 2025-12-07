
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Calendar } from 'lucide-react';

const ServiceTimes: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Weekly Services</h3>
          </div>
          <div className="space-y-3 pl-16">
            <p className="flex justify-between">
              <span className="font-medium">Sunday Morning Worship:</span>
              <span>8:00 AM & 10:30 AM</span>
            </p>
            <p className="flex justify-between">
              <span className="font-medium">Wednesday Bible Study:</span>
              <span>6:30 PM</span>
            </p>
            <p className="flex justify-between">
              <span className="font-medium">Friday Prayer Meeting:</span>
              <span>7:00 PM</span>
            </p>
            <p className="flex justify-between">
              <span className="font-medium">Youth Service:</span>
              <span>Saturday 4:00 PM</span>
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Church Location</h3>
          </div>
          <div className="pl-16 space-y-3">
            <p>Wonders of God Church</p>
            <p>Main Street, Embu Town</p>
            <p>Embu County, Kenya</p>
            <p className="text-sm text-gray-500 mt-2">
              Located near the central bus station, easily accessible by public transportation
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceTimes;

// Add missing import for MapPin
import { MapPin } from 'lucide-react';
