"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  dateOfBirth: z.string(),
  location: z.string(),
  wellnessInterests: z.array(z.string()),
  wellnessGoals: z.array(z.string()),
  hearAboutUs: z.string(),
  communicationMethod: z.string(),
  optIn: z.boolean(),
});

interface DialogBoxProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DialogBox({ open, onOpenChange }: DialogBoxProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      wellnessInterests: [],
      wellnessGoals: [],
      optIn: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Reset the form
    form.reset();
    // Close the dialog
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold hidden">
            Join Budu Essence
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Personal Information</h2>
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        {...field}
                        className="focus-visible:ring-[#f8efa1]/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Similar FormField components for email and phone */}
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Additional Information</h2>
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        className="focus-visible:ring-[#f8efa1]/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Location field */}
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Wellness Interests</h2>
              <FormField
                control={form.control}
                name="wellnessInterests"
                render={() => (
                  <FormItem>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Healthy Nutrition & Beverages",
                        "Fitness & Exercise",
                        "Mental Wellness & Self-Care",
                        "Guided Wellness Programs",
                        "Relaxation & Retreats",
                        "Community Support & Challenges",
                      ].map((interest) => (
                        <FormField
                          key={interest}
                          control={form.control}
                          name="wellnessInterests"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={interest}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(interest)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            interest,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== interest
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {interest}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Wellness Goals</h2>
              <FormField
                control={form.control}
                name="wellnessGoals"
                render={() => (
                  <FormItem>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Improve Physical Fitness",
                        "Eat Healthier",
                        "Reduce Stress & Anxiety",
                        "Lose/Gain Weight",
                        "Boost Energy & Productivity",
                        "General Well-being",
                      ].map((goal) => (
                        <FormField
                          key={goal}
                          control={form.control}
                          name="wellnessGoals"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={goal}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(goal)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, goal])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== goal
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {goal}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">
                How Did You Hear About Us?
              </h2>
              <FormField
                control={form.control}
                name="hearAboutUs"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Please select an option</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select how you found us" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#f8efa1]">
                        <SelectItem
                          value="social"
                          className="py-3 cursor-pointer hover:bg-gray-100"
                        >
                          Social Media
                        </SelectItem>
                        <SelectItem
                          value="referral"
                          className="py-3 cursor-pointer hover:bg-gray-100"
                        >
                          Friend/Referral
                        </SelectItem>
                        <SelectItem
                          value="website"
                          className="py-3 cursor-pointer hover:bg-gray-100"
                        >
                          Website/Blog
                        </SelectItem>
                        <SelectItem
                          value="event"
                          className="py-3 cursor-pointer hover:bg-gray-100"
                        >
                          Event or Workshop
                        </SelectItem>
                        <SelectItem
                          value="other"
                          className="py-3 cursor-pointer hover:bg-gray-100"
                        >
                          Other
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">
                Preferred Communication Method
              </h2>
              <FormField
                control={form.control}
                name="communicationMethod"
                render={({ field }) => (
                  <FormItem>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <RadioGroupItem value="email" />
                        <FormLabel className="font-normal">Email</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <RadioGroupItem value="whatsapp" />
                        <FormLabel className="font-normal">WhatsApp</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <RadioGroupItem value="sms" />
                        <FormLabel className="font-normal">SMS</FormLabel>
                      </FormItem>
                    </RadioGroup>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="optIn"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Yes, I want to receive wellness tips, exclusive offers,
                      and event invites from Budu Essence.
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-[#dabd5f] text-black hover:bg-[#f8efa1]/90"
              onChange={() => onOpenChange(false)}
            >
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  return { isOpen, setIsOpen };
};
