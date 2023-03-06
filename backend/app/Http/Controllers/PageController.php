<?php

namespace App\Http\Controllers;

use App\Http\Resources\PageResource;
use App\Models\Page;
use Illuminate\Http\JsonResponse;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return JsonResponse
     */
    public function store(): JsonResponse
    {
        return response()->json();
    }

    /**
     * Display the specified resource.
     *
     * @param string $locale
     * @param Page $page
     * @return JsonResponse
     */
    public function show(string $locale, Page $page): JsonResponse
    {
        if (!in_array($locale, config('app.locales'))) {
            abort(400);
        }
        return response()->json(new PageResource($page, $locale));
    }

    /**
     * Update the specified resource in storage.
     *
     * @return JsonResponse
     */
    public function update(): JsonResponse
    {
        return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return JsonResponse
     */
    public function destroy(): JsonResponse
    {
        return response()->json();
    }
}
