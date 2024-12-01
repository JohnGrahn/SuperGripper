import { useState, useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';

// Define the type for the closest combination
interface ClosestCombination {
  firstSpring: number;
  secondSpring: number;
  actualForce: number;
}

// Gripper force data matrix
const gripperForceData = [
  [null, null, 45, 56, 70, 85, 101, 120, 140, 162, 185, 211],
  [null, null, null, 64, 77, 92, 109, 128, 148, 170, 193, 219],
  [45, null, null, null, 87, 102, 119, 137, 157, 179, 203, 228],
  [56, 64, null, null, null, 113, 130, 149, 169, 191, 214, 240],
  [70, 77, 87, null, null, null, 143, 162, 182, 204, 228, 253],
  [85, 92, 102, 113, null, null, null, 177, 197, 219, 242, 268],
  [101, 109, 119, 130, 143, null, null, null, 214, 235, 259, 285],
  [120, 128, 137, 149, 162, 177, null, null, null, 254, 278, 303],
  [140, 148, 157, 169, 182, 197, 214, null, null, null, 298, 323],
  [162, 170, 179, 191, 204, 219, 235, 254, null, null, null, 345],
  [185, 193, 203, 214, 228, 242, 259, 278, 298, null, null, null],
  [211, 219, 228, 240, 253, 268, 285, 303, 323, 345, null, null]
] as (number | null)[][];

function App() {
  const [desiredForce, setDesiredForce] = useState('');
  
  const closestCombination = useMemo<ClosestCombination | null>(() => {
    // Convert input to number, default to 0 if invalid
    const force = parseFloat(desiredForce) || 0;
    
    if (force <= 0) return null;
    
    let closestMatch: ClosestCombination | null = null;
    let smallestDifference = Infinity;
    
    // Iterate through the matrix to find the closest force match
    gripperForceData.forEach((row, firstSpring) => {
      row.forEach((cellForce, secondSpring) => {
        if (cellForce !== null) {
          const difference = Math.abs(cellForce - force);
          
          if (difference < smallestDifference) {
            smallestDifference = difference;
            closestMatch = {
              firstSpring: firstSpring + 1, // Convert to 1-indexed
              secondSpring: secondSpring + 1, // Convert to 1-indexed
              actualForce: cellForce
            };
          }
        }
      });
    });
    
    return closestMatch;
  }, [desiredForce]);
  
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Ivanko Super Gripper Force Finder</CardTitle>
            <CardDescription>Find the optimal spring combination for your desired closing force</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="force-input">Desired Closing Force (lbs)</Label>
                <Input 
                  id="force-input"
                  type="number" 
                  placeholder="Enter desired force" 
                  value={desiredForce}
                  onChange={(e) => setDesiredForce(e.target.value)}
                  className="mt-2"
                />
              </div>
              
              {closestCombination && (
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-700">Recommended Spring Configuration:</h3>
                  <p>1st Spring Position: <span className="font-bold">{closestCombination.firstSpring}</span></p>
                  <p>2nd Spring Position: <span className="font-bold">{closestCombination.secondSpring}</span></p>
                  <p>Actual Closing Force: <span className="font-bold">{closestCombination.actualForce} lbs</span></p>
                  {Math.abs(parseFloat(desiredForce) - closestCombination.actualForce) > 10 && (
                    <p className="text-yellow-600 mt-2">
                      Note: The closest match is {closestCombination.actualForce} lbs, which differs 
                      from your desired {desiredForce} lbs by {Math.abs(parseFloat(desiredForce) - closestCombination.actualForce)} lbs.
                    </p>
                  )}
                </div>
              )}
              
              <div className="text-sm text-gray-600">
                <h4 className="font-semibold">Important Notes:</h4>
                <ul className="list-disc list-inside">
                  <li>Return gripper to unlocked position when adjusting springs</li>
                  <li>Always leave at least one notch between springs</li>
                  <li>Actual force may slightly differ from desired force</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
