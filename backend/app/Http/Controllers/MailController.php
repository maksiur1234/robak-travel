<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMailRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeMail;

class MailController extends Controller
{
    public function sendMail(StoreMailRequest $request)
    {
     $validated = $request->validated();

        Mail::to('maksiur1234@gmail.com')->send(new WelcomeMail([
            'name' => $validated['name'],
            'title' => $validated['title'],
            'content' => $validated['content'],
            'email' => $validated['email'],
        ]));

        return response()->json(['message' => 'Email sent successfully.']);
    }
}
